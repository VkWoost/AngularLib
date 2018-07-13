using Library.BLL.Infrastructure;
using Library.BLL.Interfaces;
using Library.DAL.DbInitializer;
using Library.Entities.Enteties;
using Library.ViewModels.AccountViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Library.BLL.Services
{
    public class AccountService : IAccountService
    {
		private readonly SignInManager<ApplicationUser> _signInManager;
		private readonly UserManager<ApplicationUser> _userManager;
		private readonly IConfiguration _configuration;

		public AccountService(ConfigurationManager applicationManager)
		{
			_userManager = applicationManager.userManager;
			_signInManager = applicationManager.signInManager;
			_configuration = applicationManager.configuration;
			DbHelper.DbInitialize(_userManager);
		}

		public async Task<ApplicationUser> Register(RegisterAccountViewModel model)
		{
			var user = new ApplicationUser
			{
				UserName = model.Email,
				Email = model.Email,
				FirstName = model.FirstName,
				LastName = model.LastName,
				Role = "user"
			};
			
			var result = await _userManager.CreateAsync(user, model.Password);
			
			if (!result.Succeeded){
				var errors = result.Errors.ToString();
				throw new BLLException(errors);
			}
			
			await _signInManager.SignInAsync(user, false);
			return user;
		}

		public async Task<object> Login(LoginAccountViewModel model)
		{
			var result = await _signInManager.PasswordSignInAsync(model.UserName, model.Password, false, false);

			if (!result.Succeeded)
			{
				throw new BLLException("Wrong Login Or Password");
			}

			ApplicationUser appUser = _userManager.Users.SingleOrDefault(r => r.Email == model.UserName);
			var token = await GenerateJwtToken(model.UserName, appUser);
			
			return new { Role = appUser.Role, Token = token };
		}

		private async Task<string> GenerateJwtToken(string email, ApplicationUser user)
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
