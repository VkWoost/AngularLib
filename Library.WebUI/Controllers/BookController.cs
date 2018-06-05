using Library.BLL.Services;
using Library.DAL;
using Library.ViewModels.Book;
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

        [HttpGet("[action]")]
        public IActionResult GetAll()
        {
            return Ok(_bookService.GetAll());
        }

        [HttpGet("[action]/{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_bookService.Get(id));
        }

        [HttpPost("[action]")]
        public IActionResult Create([FromBody] BookCreateView book)
        {
            _bookService.Create(book);
            return Ok(book);
        }

        [HttpPut("[action]")]
        public IActionResult Update([FromBody] BookUpdateView book)
        {
            _bookService.Update(book);
            return Ok(book);
        }

        [HttpDelete("[action]/{id}")]
        public IActionResult Delete(int id)
        {
            var item = _bookService.Get(id);
            _bookService.Delete(id);
            return Ok(item);
        }
    }
}
