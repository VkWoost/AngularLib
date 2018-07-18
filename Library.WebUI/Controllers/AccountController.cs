using System.Threading.Tasks;
using Library.BusinessLogic.Services;
using Microsoft.AspNetCore.Mvc;
using Library.BusinessLogic.Infrastructure;
using Library.ViewModels.AccountViewModels;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AccountController : Controller
    {
        private AccountService _accountServise;

        public AccountController(ConfigurationManager applicationManager)
        {
            _accountServise = new AccountService(applicationManager);
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
