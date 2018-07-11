using Library.BLL.Services;
using Library.DAL;
using Library.ViewModels.Book;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]")]
    public class BookController : Controller
    {
        private BookService _bookService;

        public BookController(IConfiguration configuration)
        {
            _bookService = new BookService(configuration.GetConnectionString("DefaultConnection"));
        }

        [HttpGet, Authorize]
        public IActionResult GetAll()
        {
            return Ok(_bookService.GetAll());
        }

        [HttpGet("{id}"), Authorize]
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
            var item = _bookService.Delete(id);
            return Ok(item);
        }
    }
}
