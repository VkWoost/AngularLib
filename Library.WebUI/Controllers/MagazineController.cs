using Library.BLL.Services;
using Library.DAL;
using Library.ViewModels.Magazine;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]")]
    public class MagazineController : Controller
    {
        private MagazineService _magazineService;

        public MagazineController(LibraryContext context)
        {
            _magazineService = new MagazineService(context);
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_magazineService.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_magazineService.Get(id));
        }

        [HttpPost, Authorize(Policy = "admin")]
        public IActionResult Create([FromBody] MagazineCreateView magazine)
        {
            _magazineService.Create(magazine);
            return Ok(magazine);
        }

        [HttpPut, Authorize(Policy = "admin")]
        public IActionResult Update([FromBody] MagazineUpdateView magazine)
        {
            _magazineService.Update(magazine);
            return Ok(magazine);
        }

        [HttpDelete("{id}"), Authorize(Policy = "admin")]
        public IActionResult Delete(int id)
        {
            var item = _magazineService.Get(id);
            _magazineService.Delete(id);
            return Ok(item);
        }
    }
}
