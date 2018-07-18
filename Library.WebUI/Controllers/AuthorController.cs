using Library.BusinessLogic.Services;
using Library.ViewModels.AuthorViewModels;
using Library.WebUI.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]")]
    public class AuthorController : Controller
    {
        private AuthorService _authorService;

        public AuthorController(AuthorService authorService)
        {
            _authorService = authorService;
        }

        [HttpGet, Authorize]
        public IActionResult GetAll()
        {
            var result = _authorService.GetAll();
            return Ok(result);
        }

        [HttpGet("{id}"), Authorize]
        public IActionResult Get(int id)
        {
            var result = _authorService.Get(id);
            return Ok(result);
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
