using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Library.Entities.Identity;
using Library.ViewModels.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Library.WebUI.Controllers
{
  [Route("api/[controller]/[action]")]
  public class AccountController : Controller
  {
    private readonly SignInManager<AppUser> _signInManager;
    private readonly UserManager<AppUser> _userManager;
    private readonly IConfiguration _configuration;

    public AccountController(
        UserManager<AppUser> userManager,
        SignInManager<AppUser> signInManager,
        IConfiguration configuration
        )
    {
      _userManager = userManager;
      _signInManager = signInManager;
      _configuration = configuration;
    }

    [HttpPost]
    public async Task<IActionResult> Login([FromBody] CredentialsViewModel model)
    {
      var result = await _signInManager.PasswordSignInAsync(model.UserName, model.Password, false, false);

      if (result.Succeeded)
      {
        var appUser = _userManager.Users.SingleOrDefault(r => r.Email == model.UserName);
        var res = await GenerateJwtToken(model.UserName, appUser);
        
        return Ok(res);
      }

      throw new ApplicationException("INVALID_LOGIN_ATTEMPT");
    }

    [HttpPost]
    public async Task<IActionResult> Register([FromBody] RegistrationViewModel model)
    {
      var user = new AppUser
      {
        UserName = model.Email,
        Email = model.Email
      };
      var result = await _userManager.CreateAsync(user, model.Password);

      if (result.Succeeded)
      {
        await _signInManager.SignInAsync(user, false);
        return Ok(user);
      }

      throw new ApplicationException("UNKNOWN_ERROR");
    }

    private async Task<string> GenerateJwtToken(string email, IdentityUser user)
    {
      var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
            };

      var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("SOME_RANDOM_KEY_DO_NOT_SHARE"));
      var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
      var expires = DateTime.Now.AddDays(Convert.ToDouble(30));

      var token = new JwtSecurityToken(
          "qwertyuiop",
          "qwertyuiop",
          claims,
          expires: expires,
          signingCredentials: creds
      );

      return new JwtSecurityTokenHandler().WriteToken(token);
    }
  }
}
