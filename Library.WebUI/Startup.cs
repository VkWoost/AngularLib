using System.IO;
using Library.BLL.Profiles;
using Library.BLL.Services;
using Library.DAL;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Library.WebUI
{
  public class Startup
  {
    public void ConfigureServices(IServiceCollection services)
    {
      string connectionString = "Data Source=(local);Initial Catalog=Angular; Integrated Security=True";
                        
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
      //app.UseStaticFiles();
      ////app.UseDefaultFiles();
  
      app.UseMvc(routes =>
      {
        routes.MapRoute(
            name: "default",
            template: "{controller=Home}/{action=Index}/{id?}");

        routes.MapSpaFallbackRoute(
            name: "spa-fallback",
            defaults: new { controller = "Magazine", action = "GetAll" });
      });

      //app.UseMvcWithDefaultRoute();

      //app.Use(async (context, next) =>
      //{
      //  await next();
      //  if (context.Response.StatusCode == 404 &&
      //      !Path.HasExtension(context.Request.Path.Value) &&
      //      !context.Request.Path.Value.StartsWith("/api/"))
      //  {
      //    context.Request.Path = "/index.html";
      //    await next();
      //  }
      //});

      app.UseDefaultFiles();
      app.UseStaticFiles();

    }
  }
}
