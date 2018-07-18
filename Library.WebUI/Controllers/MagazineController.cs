using Library.BusinessLogic.Services;
using Library.ViewModels.MagazineViewModels;
using Library.WebUI.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]")]
    public class MagazineController : Controller
    {
        private MagazineService _magazineService;

        public MagazineController(MagazineService magazineService)
        {
            _magazineService = magazineService;
        }

        [HttpGet, Authorize]
        public IActionResult GetAll()
        {
            var result = _magazineService.GetAll();
            return Ok(result);
        }

        [HttpGet("{id}"), Authorize]
        public IActionResult Get(long id)
        {
            var result = _magazineService.Get(id);
            return Ok(result);
        }

        [HttpPost, Authorize(Policy = nameof(IdentityRoles.admin))]
        public IActionResult Create([FromBody] CreateMagazineViewModel magazine)
        {
            _magazineService.Create(magazine);
            return Ok(magazine);
        }

        [HttpPut, Authorize(Policy = nameof(IdentityRoles.admin))]
        public IActionResult Update([FromBody] UpdateMagazineViewModel magazine)
        {
            _magazineService.Update(magazine);
            return Ok(magazine);
        }

        [HttpDelete("{id}"), Authorize(Policy = nameof(IdentityRoles.admin))]
        public IActionResult Delete(long id)
        {
            var item = _magazineService.Delete(id);
            return Ok(item);
        }
    }
}
