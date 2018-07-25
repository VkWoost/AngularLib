using System.Threading.Tasks;
using Library.BusinessLogic.Services;
using Microsoft.AspNetCore.Mvc;
using Library.BusinessLogic.Infrastructure;
using Library.ViewModels.AccountViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Library.Entities.Entities;
using System.Net;
using System;
using Microsoft.Extensions.Logging;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AccountController : Controller
    {
        private AccountService _accountServise;
        private readonly ILogger<AccountController> _logger;

        public AccountController
        (
            UserManager<User> userManager,
            SignInManager<User> signInManager, 
            IConfiguration configuration,
            ILogger<AccountController> logger
        )
        {
            _accountServise = new AccountService(userManager,signInManager,configuration);
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginAccountViewModel model)
        {
            try
            {
                var result = await _accountServise.Login(model);
                return Ok(result);
            }
            catch (BusinessLogicException exception)
            {
                return BadRequest(exception.Message);
            }
            catch (Exception exception)
            {
                _logger.LogInformation(exception.Message);
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] RegisterAccountViewModel model)
        {
            try
            {
                var result = await _accountServise.Register(model);
                return Ok(result);
            }
            catch (BusinessLogicException exception)
            {
                return BadRequest(exception.Message);
            }
            catch (Exception exception)
            {
                _logger.LogInformation(exception.Message);
                return StatusCode((int)HttpStatusCode.InternalServerError);
            }
        }
    }
}
