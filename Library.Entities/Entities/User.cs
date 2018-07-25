using Microsoft.AspNetCore.Identity;

namespace Library.Entities.Entities
{
	public class User : IdentityUser
	{
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Role { get; set; }
	}
}
