using Library.Entities.Enteties;
using Library.ViewModels.AccountViewModels;
using System.Threading.Tasks;

namespace Library.BusinessLogic.Interfaces
{
	public interface IAccountService
    {
		Task<ApplicationUser> Register(RegisterAccountViewModel model);
		Task<RoleTokenViewModel> Login(LoginAccountViewModel model);
	}
}
