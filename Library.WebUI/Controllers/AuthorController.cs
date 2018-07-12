using Library.BLL.Interfaces;
using Library.BLL.Services;
using Library.ViewModels.AuthorViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]")]
    public class AuthorController : Controller
    {
        private IAuthorService _authorService;

        public AuthorController(IConfiguration configuration)
        {
            _authorService = new AuthorService(configuration.GetConnectionString("DefaultConnection"));
        }

        [HttpGet, Authorize]
        public IActionResult GetAll()
        {
            var res = _authorService.GetAll();
            return Ok(res);
        }

        [HttpGet("{id}"), Authorize]
        public IActionResult Get(int id)
        {
            var res = _authorService.Get(id);
            return Ok(res);
        }

        [HttpPost, Authorize(Policy = nameof(IdentityRoles.admin))]
        public IActionResult Create([FromBody] CreateAuthorViewModel author)
        {
            _authorService.Create(author);
            return Ok(author);
        }

        [HttpPut, Authorize(Policy = nameof(IdentityRoles.admin))]
        public IActionResult Update([FromBody] UpdateAuthorViewModel author)
        {
            _authorService.Update(author);
            return Ok(author);
        }

        [HttpDelete("{id}"), Authorize(Policy = nameof(IdentityRoles.admin))]
        public IActionResult Delete(int id)
        {
            var item = _authorService.Delete(id);
            return Ok(item);
        }
    }
}
