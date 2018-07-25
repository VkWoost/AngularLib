using Library.Entities.Entities;
using Library.ResponseModels;
using Library.ViewModels.AccountViewModels;
using System.Threading.Tasks;

namespace Library.BusinessLogic.Interfaces
{
	public interface IAccountService
    {
		Task<User> Register(RegisterAccountViewModel model);
		Task<ResponseLoginAccount> Login(LoginAccountViewModel model);
	}
}
