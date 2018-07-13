using System;
using System.IO;
using System.Text;
using Library.DAL;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Library.Entities.Enteties;
using Library.BLL.Interfaces;
using Library.BLL.Services;
using Library.BLL.Infrastructure;

namespace Library.WebUI
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<LibraryContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"),
            b => b.MigrationsAssembly("Library.DAL")));

            services.AddTransient(typeof(UserManager<ApplicationUser>));
            services.AddTransient(typeof(SignInManager<ApplicationUser>));

            services.AddSingleton(typeof(ApplicationManager));

            services.AddTransient<IAuthorService, AuthorService>();
            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IBookService, BookService>();
            services.AddTransient<IBrochureService, BrochureService>();
            services.AddTransient<IMagazineService, MagazineService>();
            services.AddTransient<IPublicationHouseService, PublicationHouseService>();

            var tokenValidationParameters = new TokenValidationParameters();

            tokenValidationParameters.ValidateIssuer = true;
            tokenValidationParameters.ValidIssuer = Configuration["JwtIssuer"];

            tokenValidationParameters.ValidateAudience = true;
            tokenValidationParameters.ValidAudience = Configuration["JwtIssuer"];

            tokenValidationParameters.ValidateIssuerSigningKey = true;
            tokenValidationParameters.IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration["JwtKey"]));

            tokenValidationParameters.RequireExpirationTime = true;
            tokenValidationParameters.ValidateLifetime = true;
            tokenValidationParameters.ClockSkew = TimeSpan.FromMinutes(0);

            services.AddIdentity<ApplicationUser, IdentityRole>()
                      .AddEntityFrameworkStores<LibraryContext>()
                      .AddDefaultTokenProviders();

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;

            }).AddJwtBearer(configureOptions =>
            {
                configureOptions.ClaimsIssuer = Configuration["JwtIssuer"];
                configureOptions.RequireHttpsMetadata = false;
                configureOptions.SaveToken = true;
                configureOptions.TokenValidationParameters = tokenValidationParameters;
            });

            services.AddAuthorization(options =>
            {
                options.AddPolicy(nameof(IdentityRoles.admin), policy => policy.RequireRole(nameof(IdentityRoles.admin)));
            });

            var builder = services.AddIdentityCore<ApplicationUser>(o =>
            {
                o.Password.RequireDigit = false;
                o.Password.RequireLowercase = false;
                o.Password.RequireUppercase = false;
                o.Password.RequireNonAlphanumeric = false;
                o.Password.RequiredLength = 6;
            });

            builder = new IdentityBuilder(builder.UserType, typeof(IdentityRole), builder.Services);
            builder.AddEntityFrameworkStores<LibraryContext>().AddDefaultTokenProviders();

            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.Use(async (context, next) =>
            {
                await next();
                if (context.Response.StatusCode == 404 &&
              !Path.HasExtension(context.Request.Path.Value) &&
              !context.Request.Path.Value.StartsWith("/api/"))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });

            app.UseAuthentication();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
        }
    }
}
