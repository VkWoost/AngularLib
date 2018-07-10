using System;
using System.IO;
using System.Text;
using Library.BLL.Profiles;
using Library.DAL;
using Library.Entities.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using AutoMapper;

namespace Library.WebUI
{
  public class Startup
  {
    private const string SecretKey = "iNivDmHLpUA223sqsfhqGbMRdRj1PVkH"; 
    private readonly SymmetricSecurityKey _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecretKey));
    public IConfiguration Configuration { get; }

    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public void ConfigureServices(IServiceCollection services)
    {         
      services.AddDbContext<LibraryContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"),
      b => b.MigrationsAssembly("Library.DAL")));

      services.AddTransient(typeof(UserManager<AppUser>));
      services.AddTransient(typeof(SignInManager<AppUser>));

      var tokenValidationParameters = new TokenValidationParameters();

      tokenValidationParameters.ValidateIssuer = true;
      tokenValidationParameters.ValidIssuer = Configuration["JwtIssuer"];

      tokenValidationParameters.ValidateAudience = true;
      tokenValidationParameters.ValidAudience = Configuration["JwtIssuer"];

      tokenValidationParameters.ValidateIssuerSigningKey = true;
      tokenValidationParameters.IssuerSigningKey = _signingKey;

      tokenValidationParameters.RequireExpirationTime = true;
      tokenValidationParameters.ValidateLifetime = true;
      tokenValidationParameters.ClockSkew = TimeSpan.FromMinutes(0);



      services.AddIdentity<AppUser, IdentityRole>()
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
        options.AddPolicy("admin", policy => policy.RequireRole("admin"));
      });

      var builder = services.AddIdentityCore<AppUser>(o =>
      {
        o.Password.RequireDigit = false;
        o.Password.RequireLowercase = false;
        o.Password.RequireUppercase = false;
        o.Password.RequireNonAlphanumeric = false;
        o.Password.RequiredLength = 6;
      });

      builder = new IdentityBuilder(builder.UserType, typeof(IdentityRole), builder.Services);
      builder.AddEntityFrameworkStores<LibraryContext>().AddDefaultTokenProviders();

      services.AddAutoMapper(cfg => {
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
