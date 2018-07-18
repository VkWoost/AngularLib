using Library.BusinessLogic.Services;
using Library.ViewModels.BookViewModels;
using Library.WebUI.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]")]
    public class BookController : Controller
    {
        private BookService _bookService;

        public BookController(BookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet, Authorize]
        public IActionResult GetAll()
        {
            var result = _bookService.GetAll();
            return Ok(result);
        }

        [HttpGet("{id}"), Authorize]
        public IActionResult Get(int id)
        {
            var result = _bookService.Get(id);
            return Ok(result);
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
