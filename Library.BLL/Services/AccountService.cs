using Library.BusinessLogic.Infrastructure;
using Library.BusinessLogic.Interfaces;
using Library.DataAccess.DbInitializer;
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

namespace Library.BusinessLogic.Services
{
	public class AccountService : IAccountService
	{
		private UserManager<User> _userManager { get; set; }
		private SignInManager<User> _signInManager { get; set; }
		private IConfiguration _configuration { get; set; }

		public AccountService
		(
			UserManager<User> userManager,
			SignInManager<User> signInManager,
			IConfiguration configuration
		)
		{
			_userManager = userManager;
			_signInManager = signInManager;
			_configuration = configuration;
			DbHelper.DbInitialize(_userManager);
		}

		public async Task<User> Register(RegisterAccountViewModel model)
		{
			var user = new User
			{
				UserName = model.Email,
				Email = model.Email,
				FirstName = model.FirstName,
				LastName = model.LastName,
				Role = "user"
			};

			var result = await _userManager.CreateAsync(user, model.Password);

			if (!result.Succeeded)
			{
				var errors = result.Errors.ToString();
				throw new BusinessLogicException(errors);
			}

			await _signInManager.SignInAsync(user, false);
			return user;
		}

		public async Task<TokenAccountViewModel> Login(LoginAccountViewModel model)
		{
			var result = await _signInManager.PasswordSignInAsync(model.UserName, model.Password, false, false);

			if (!result.Succeeded)
			{
				throw new BusinessLogicException("Wrong login or password");
			}

			User appUser = _userManager.Users.SingleOrDefault(r => r.Email == model.UserName);
			var token = GenerateJwtToken(model.UserName, appUser);

			var roleToken = new TokenAccountViewModel()
			{
				Role = appUser.Role,
				Token = token
			};
			return roleToken;
		}

		private string GenerateJwtToken(string email, User user)
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

			var result = new JwtSecurityToken(
				_configuration["JwtIssuer"],
				_configuration["JwtIssuer"],
				claims: claims,
				expires: expires,
				signingCredentials: creds
			);

			var token = new JwtSecurityTokenHandler().WriteToken(result);
			return token;
		}
	}
}
