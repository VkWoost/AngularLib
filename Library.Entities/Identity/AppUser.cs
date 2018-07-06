using Microsoft.AspNetCore.Identity;

namespace Library.Entities.Identity
{
	public class AppUser : IdentityUser
	{
		public string FirstName { get; set; }
		public string LastName { get; set; }
	}
}
