using Library.Entities.Enteties;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;

namespace Library.BLL.Infrastructure
{
	public class ConfigurationManager
    {
		public UserManager<ApplicationUser> UserManager{ get; set; }
		public SignInManager<ApplicationUser> SignInManager{ get; set; }
		public IConfiguration Configuration{ get; set; }
	}
}
