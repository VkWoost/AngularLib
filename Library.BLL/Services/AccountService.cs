using Library.BLL.Infrastructure;
using Library.BLL.Interfaces;
using Library.DAL.DbInitializer;
using Library.Entities.Enteties;
using Library.ViewModels.AccountViewModels;
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
		private ConfigurationManager _confugurationManager;

		public AccountService(ConfigurationManager confugurationManager)
		{
			_confugurationManager = confugurationManager;
			DbHelper.DbInitialize(_confugurationManager.UserManager);
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
			
			var result = await _confugurationManager.UserManager.CreateAsync(user, model.Password);
			
			if (!result.Succeeded){
				var errors = result.Errors.ToString();
				throw new BLLException(errors);
			}
			
			await _confugurationManager.SignInManager.SignInAsync(user, false);
			return user;
		}

		public async Task<RoleTokenViewModel> Login(LoginAccountViewModel model)
		{
			var result = await _confugurationManager.SignInManager.PasswordSignInAsync(model.UserName, model.Password, false, false);

			if (!result.Succeeded)
			{
				throw new BLLException("Wrong login or password");
			}

			ApplicationUser appUser = _confugurationManager.UserManager.Users.SingleOrDefault(r => r.Email == model.UserName);
			var token = await GenerateJwtToken(model.UserName, appUser);

			var roleToken = new RoleTokenViewModel()
			{
				Role = appUser.Role,
				Token = token
			};
			return roleToken;
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

			var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_confugurationManager.GetJwtKey()));
			var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
			var expires = DateTime.Now.AddDays(Convert.ToDouble(_confugurationManager.GetJwtExpireDays()));

			var result = new JwtSecurityToken(
				_confugurationManager.GetJwtIssuer(),
				_confugurationManager.GetJwtIssuer(),
				claims: claims,
				expires: expires,
				signingCredentials: creds
			);

			var token =  new JwtSecurityTokenHandler().WriteToken(result);
			return token;
		}
	}
}
