using Library.BLL.Profiles;
using Library.BLL.Services;
using Library.DAL;
using Library.DAL.Interfaces;
using Library.DAL.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Library.WEB
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            string connectionString = Configuration.GetConnectionString("LibraryDbConnection");

            services.AddDbContext<LibraryContext>(options => options.UseSqlServer(connectionString));

            services.AddTransient<AuthorService>();

            AutoMapper.Mapper.Initialize(cfg => {
                cfg.AddProfile<MagazineProfile>();
                cfg.AddProfile<BrochureProfile>();
                cfg.AddProfile<BookProfile>();
                cfg.AddProfile<AuthorProfile>();
                cfg.AddProfile<PublicationHouseProfile>();
            });

            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Author", action = "GetAll" });
            });
        }
    }
}
