using System.Threading.Tasks;
using Library.BLL.Services;
using Library.DAL;
using Library.Entities.Identity;
using Library.ViewModels.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Linq;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AccountController : Controller
    {
        private AccountService _accountServise;

        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IConfiguration configuration)
        {
            _accountServise = new AccountService(userManager, signInManager, configuration);
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
