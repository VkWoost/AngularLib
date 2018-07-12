using Library.BLL.Interfaces;
using Library.BLL.Services;
using Library.ViewModels.MagazineViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Library.WebUI.Controllers
{
    [Route("api/[controller]")]
    public class MagazineController : Controller
    {
        private IMagazineService _magazineService;

        public MagazineController(IConfiguration configuration)
        {
            _magazineService = new MagazineService(configuration.GetConnectionString("DefaultConnection"));
        }

        [HttpGet, Authorize]
        public IActionResult GetAll()
        {
            var res = _magazineService.GetAll();
            return Ok(res);
        }

        [HttpGet("{id}"), Authorize]
        public IActionResult Get(long id)
        {
            var res = _magazineService.Get(id);
            return Ok(res);
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
