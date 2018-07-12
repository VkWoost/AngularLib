using Library.BLL.Interfaces;
using Library.BLL.Services;
using Library.DAL;
using Library.ViewModels.BookViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]")]
    public class BookController : Controller
    {
        private IBookService _bookService;

        public BookController(IConfiguration configuration)
        {
            _bookService = new BookService(configuration.GetConnectionString("DefaultConnection"));
        }

        [HttpGet, Authorize]
        public IActionResult GetAll()
        {
            var res = _bookService.GetAll();
            return Ok(res);
        }

        [HttpGet("{id}"), Authorize]
        public IActionResult Get(int id)
        {
            var res = _bookService.Get(id);
            return Ok(res);
        }

        [HttpPost, Authorize(Policy = nameof(IdentityRoles.admin))]
        public IActionResult Create([FromBody] CreateBookViewModel book)
        {
            _bookService.Create(book);
            return Ok(book);
        }

        [HttpPut, Authorize(Policy = nameof(IdentityRoles.admin))]
        public IActionResult Update([FromBody] UpdateBookViewModel book)
        {
            _bookService.Update(book);
            return Ok(book);
        }

        [HttpDelete("{id}"), Authorize(Policy = nameof(IdentityRoles.admin))]
        public IActionResult Delete(int id)
        {
            var item = _bookService.Delete(id);
            return Ok(item);
        }
    }
}
