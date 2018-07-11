using Library.BLL.Services;
using Library.ViewModels.Author;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]")]
    public class AuthorController : Controller
    {
        private AuthorService _authorService;

        public AuthorController(IConfiguration configuration)
        {
            _authorService = new AuthorService(configuration.GetConnectionString("DefaultConnection"));
        }

        [HttpGet, Authorize]
        public IActionResult GetAll()
        {
            return Ok(_authorService.GetAll());
        }

        [HttpGet("{id}"), Authorize]
        public IActionResult Get(int id)
        {
            return Ok(_authorService.Get(id));
        }

        [HttpPost, Authorize(Policy = "admin")]
        public IActionResult Create([FromBody] AuthorCreateView author)
        {
            _authorService.Create(author);
            return Ok(author);
        }

        [HttpPut, Authorize(Policy = "admin")]
        public IActionResult Update([FromBody] AuthorUpdateView author)
        {
            _authorService.Update(author);
            return Ok(author);
        }

        [HttpDelete("{id}"), Authorize(Policy = "admin")]
        public IActionResult Delete(int id)
        {
            var item = _authorService.Delete(id);
            return Ok(item);
        }
    }
}
