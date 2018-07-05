using System;
using System.IO;
using System.Text;
using Library.BLL.Profiles;
using Library.DAL;
using Library.Entities.Identity;
using Library.WebUI.Auth;
using Library.WebUI.Helpers;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.IdentityModel.Tokens;
using AutoMapper;

namespace Library.WebUI
{
  public class Startup
  {
    private const string SecretKey = "iNivDmHLpUA223sqsfhqGbMRdRj1PVkH"; // todo: get this from somewhere secure
    private readonly SymmetricSecurityKey _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecretKey));
    public IConfiguration Configuration { get; }

    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public void ConfigureServices(IServiceCollection services)
    {
      string connectionString = "Data Source=(local);Initial Catalog=Angular; Integrated Security=True";
                        
      services.AddDbContext<LibraryContext>(options => options.UseSqlServer(connectionString, b => b.MigrationsAssembly("Library.DAL")));
      services.AddTransient(typeof(UserManager<AppUser>));
      services.AddTransient(typeof(SignInManager<AppUser>));


      services.AddSingleton<IJwtFactory, JwtFactory>();
      services.TryAddTransient<IHttpContextAccessor, HttpContextAccessor>();

      // Get options from app settings
      var jwtAppSettingOptions = Configuration.GetSection(nameof(JwtIssuerOptions));

      // Configure JwtIssuerOptions
      services.Configure<JwtIssuerOptions>(options =>
      {
        options.Issuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
        options.Audience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)];
        options.SigningCredentials = new SigningCredentials(_signingKey, SecurityAlgorithms.HmacSha256);
      });

      var tokenValidationParameters = new TokenValidationParameters
      {
        ValidateIssuer = true,
        ValidIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)],

        ValidateAudience = true,
        ValidAudience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)],

        ValidateIssuerSigningKey = true,
        IssuerSigningKey = _signingKey,

        RequireExpirationTime = false,
        ValidateLifetime = true,
        ClockSkew = TimeSpan.Zero
      };

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
        configureOptions.ClaimsIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
        //configureOptions.TokenValidationParameters = tokenValidationParameters;
        //configureOptions.SaveToken = true;
        configureOptions.RequireHttpsMetadata = false;
        configureOptions.SaveToken = true;
        configureOptions.TokenValidationParameters = new TokenValidationParameters
        {
          ValidIssuer = Configuration["JwtIssuer"],
          ValidAudience = Configuration["JwtIssuer"],
          IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JwtKey"])),
          ClockSkew = TimeSpan.Zero // remove delay of token when expire
        };
      });

      // api user claim policy
      services.AddAuthorization(options =>
      {
        options.AddPolicy("ApiUser", policy => policy.RequireClaim(Constants.Strings.JwtClaimIdentifiers.Rol, Constants.Strings.JwtClaims.ApiAccess));
      });

      var builder = services.AddIdentityCore<AppUser>(o =>
      {
        // configure identity options
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
        cfg.AddProfile<UserProfile>();
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

      app.UseDefaultFiles();
      app.UseStaticFiles();
      app.UseMvc();
    }
  }
}
