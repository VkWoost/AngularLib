using Library.DAL;
using Library.DAL.DbInitializer;
using Library.Entities.Identity;
using Library.ViewModels.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Library.BLL.Services
{
    public class AccountService
    {
		private readonly SignInManager<AppUser> _signInManager;
		private readonly UserManager<AppUser> _userManager;
		private readonly IConfiguration _configuration;

		public AccountService(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IConfiguration configuration)
		{
			_userManager = userManager;
			_signInManager = signInManager;
			_configuration = configuration;
			DbHelper.DbInitialize(_userManager);
		}

		public async Task<AppUser> Register(RegistrationViewModel model)
		{
			var user = new AppUser
			{
				UserName = model.Email,
				Email = model.Email,
				FirstName = model.FirstName,
				LastName = model.LastName,
				Role = "user"
			};
			var result = await _userManager.CreateAsync(user, model.Password);
			if (!result.Succeeded){
				throw new ApplicationException("UNKNOWN_ERROR");
			}
			await _signInManager.SignInAsync(user, false);
			return user;
		}

		public async Task<object> Login(CredentialsViewModel model)
		{
			var result = await _signInManager.PasswordSignInAsync(model.UserName, model.Password, false, false);

			if (!result.Succeeded)
			{
				throw new ApplicationException("INVALID_LOGIN_ATTEMPT");
			}

			AppUser appUser = _userManager.Users.SingleOrDefault(r => r.Email == model.UserName);
			var res = await GenerateJwtToken(model.UserName, appUser);
			return new { Role = appUser.Role, Token = res };
		}

		private async Task<string> GenerateJwtToken(string email, AppUser user)
		{
			var claims = new List<Claim>
			{
				new Claim(JwtRegisteredClaimNames.Email, email),
				new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
				new Claim(ClaimTypes.NameIdentifier, user.Id),
				new Claim(ClaimTypes.Role, user.Role)
				 };

			var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtKey"]));
			var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
			var expires = DateTime.Now.AddDays(Convert.ToDouble(_configuration["JwtExpireDays"]));

			var token = new JwtSecurityToken(
				_configuration["JwtIssuer"],
				_configuration["JwtIssuer"],
				claims: claims,
				expires: expires,
				signingCredentials: creds
			);

			return new JwtSecurityTokenHandler().WriteToken(token);
		}
	}
}
