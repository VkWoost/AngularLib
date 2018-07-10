using Library.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace Library.DAL.DbInitializer
{
	public static class DbHelper
    {
		public static async void DbInitialize(UserManager<AppUser> userManager)
		{
			if (userManager.Users.Any())
			{
				return;
			}
			var user = new AppUser
			{
				UserName = "admin@gmail.com",
				Email = "admin@gmail.com",
				Role = "admin"
			};
			string password = "123456";

			var result = await userManager.CreateAsync(user, password);
			if (!result.Succeeded)
			{
				throw new ApplicationException("UNKNOWN_ERROR");
			}
		}
	}
}
