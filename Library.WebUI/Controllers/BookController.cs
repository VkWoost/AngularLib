using Library.BLL.Services;
using Library.DAL;
using Library.ViewModels.Book;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]")]
    public class BookController : Controller
    {
        private BookService _bookService;

        public BookController(LibraryContext context)
        {
            _bookService = new BookService(context);
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_bookService.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_bookService.Get(id));
        }

        [HttpPost, Authorize(Policy = "admin")]
        public IActionResult Create([FromBody] BookCreateView book)
        {
            _bookService.Create(book);
            return Ok(book);
        }

        [HttpPut, Authorize(Policy = "admin")]
        public IActionResult Update([FromBody] BookUpdateView book)
        {
            _bookService.Update(book);
            return Ok(book);
        }

        [HttpDelete("{id}"), Authorize(Policy = "admin")]
        public IActionResult Delete(int id)
        {
            var item = _bookService.Get(id);
            _bookService.Delete(id);
            return Ok(item);
        }
    }
}
