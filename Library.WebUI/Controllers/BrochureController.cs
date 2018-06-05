using Library.BLL.Services;
using Library.DAL;
using Library.ViewModels.Brochure;
using Microsoft.AspNetCore.Mvc;

namespace Library.WebUI.Controllers
{
  [Route("api/[controller]")]
    public class BrochureController : Controller
    {
        private BrochureService _brochureService;

        public BrochureController(LibraryContext context)
        {
            _brochureService = new BrochureService(context);
        }

        [HttpGet("[action]")]
        public IActionResult GetAll()
        {
            return Ok(_brochureService.GetAll());
        }

        [HttpGet("[action]/{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_brochureService.Get(id));
        }

        [HttpPost("[action]")]
        public IActionResult Create([FromBody] BrochureCreateView brochure)
        {
            _brochureService.Create(brochure);
            return Ok(brochure);
        }

        [HttpPut("[action]")]
        public IActionResult Update([FromBody] BrochureUpdateView brochure)
        {
            _brochureService.Update(brochure);
            return Ok(brochure);
        }

        [HttpDelete("[action]/{id}")]
        public IActionResult Delete(int id)
        {
            var item = _brochureService.Get(id);
            _brochureService.Delete(id);
            return Ok(item);
        }
    }
}
