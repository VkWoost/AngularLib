using System.Threading.Tasks;
using Library.BLL.Services;
using Library.ViewModels.Identity;
using Microsoft.AspNetCore.Mvc;
using Library.BLL.Interfaces;
using Library.BLL.Infrastructure;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AccountController : Controller
    {
        private IAccountService _accountServise;

        public AccountController(ApplicationManager applicationManager)
        {
            _accountServise = new AccountService(applicationManager);
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] CredentialsViewModel model)
        {
            var res = await _accountServise.Login(model);
            return Ok(res);
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] RegistrationViewModel model)
        {
            var res = await _accountServise.Register(model);
            return Ok(res);
        }
    }
}
