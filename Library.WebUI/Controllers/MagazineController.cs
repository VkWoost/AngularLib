using Library.BLL.Services;
using Library.DAL;
using Library.ViewModels.Magazine;
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
        public MagazineGetAllView Get()
        {
            return _magazineService.GetAll();
        }

        [HttpGet/*("[action]")*/]
        public IActionResult GetAll()
        {
            return Ok(_magazineService.GetAll());
        }

        [HttpGet("[action]/{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_magazineService.Get(id));
        }

        [HttpPost("[action]")]
        public IActionResult Create([FromBody] MagazineCreateView magazine)
        {
            _magazineService.Create(magazine);
            return Ok(magazine);
        }

        [HttpPut("[action]")]
        public IActionResult Update([FromBody] MagazineUpdateView magazine)
        {
            _magazineService.Update(magazine);
            return Ok(magazine);
        }

        [HttpDelete("[action]/{id}")]
        public IActionResult Delete(int id)
        {
            var item = _magazineService.Get(id);
            _magazineService.Delete(id);
            return Ok(item);
        }
    }
}
