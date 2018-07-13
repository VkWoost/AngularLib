﻿using Library.Entities.Enteties;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;

namespace Library.BLL.Infrastructure
{
	public class ConfigurationManager
    {
		public UserManager<ApplicationUser> userManager;
		public SignInManager<ApplicationUser> signInManager;
		public IConfiguration configuration;

		public ConfigurationManager(UserManager<ApplicationUser> uManager, SignInManager<ApplicationUser> sInManager, IConfiguration config)
		{
			userManager = uManager;
			signInManager = sInManager;
			configuration = config;
		}

	}
}
