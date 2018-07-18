using System.Threading.Tasks;
using Library.BusinessLogic.Services;
using Microsoft.AspNetCore.Mvc;
using Library.BusinessLogic.Infrastructure;
using Library.ViewModels.AccountViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Library.Entities.Enteties;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AccountController : Controller
    {
        private AccountService _accountServise;

        public AccountController(
            UserManager<User> userManager,
            SignInManager<User> signInManager, 
            IConfiguration configuration
        )
        {
            _accountServise = new AccountService(userManager,signInManager,configuration);
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginAccountViewModel model)
        {
            var result = await _accountServise.Login(model);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] RegisterAccountViewModel model)
        {
            var result = await _accountServise.Register(model);
            return Ok(result);
        }
    }
}
