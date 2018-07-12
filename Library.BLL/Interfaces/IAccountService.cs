using Library.Entities.Enteties;
using Library.ViewModels.Identity;
using System.Threading.Tasks;

namespace Library.BLL.Interfaces
{
	public interface IAccountService
    {
		Task<ApplicationUser> Register(RegistrationViewModel model);
		Task<object> Login(CredentialsViewModel model);
	}
}
