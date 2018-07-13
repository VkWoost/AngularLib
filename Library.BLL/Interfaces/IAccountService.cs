using Library.Entities.Enteties;
using Library.ViewModels.AccountViewModels;
using System.Threading.Tasks;

namespace Library.BLL.Interfaces
{
	public interface IAccountService
    {
		Task<ApplicationUser> Register(RegisterAccountViewModel model);
		Task<object> Login(LoginAccountViewModel model);
	}
}
