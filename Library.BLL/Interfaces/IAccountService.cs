using Library.Entities.Enteties;
using Library.ViewModels.AccountViewModels;
using System.Threading.Tasks;

namespace Library.BusinessLogic.Interfaces
{
	public interface IAccountService
    {
		Task<User> Register(RegisterAccountViewModel model);
		Task<TokenAccountViewModel> Login(LoginAccountViewModel model);
	}
}
