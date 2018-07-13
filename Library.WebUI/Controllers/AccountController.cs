using System.Threading.Tasks;
using Library.BLL.Services;
using Microsoft.AspNetCore.Mvc;
using Library.BLL.Interfaces;
using Library.BLL.Infrastructure;
using Library.ViewModels.AccountViewModels;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AccountController : Controller
    {
        private IAccountService _accountServise;

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
