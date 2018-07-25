using Library.Entities.Entities;
using Microsoft.AspNetCore.Identity;
using System.Linq;

namespace Library.DataAccess.DbInitializer
{
	public static class DbHelper
    {
		public static async void DbInitialize(UserManager<User> userManager)
		{
			if (userManager.Users.Any())
			{
				return;
			}

			var user = new User
			{
				UserName = "admin@gmail.com",
				Email = "admin@gmail.com",
				Role = "admin"
			};

			string password = "123456";

			await userManager.CreateAsync(user, password);
		}
	}
}
