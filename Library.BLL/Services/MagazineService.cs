using AutoMapper;
using Library.BLL.Infrastructure;
using Library.DAL;
using Library.DAL.Interfaces;
using Library.DAL.Repositories;
using Library.Entities.Enteties;
using Library.ViewModels.Magazine;
using System.Collections.Generic;

namespace Library.BLL.Services
{
    public class MagazineService
    {
        private IRepository<Magazine> _magazineRepository;

        public MagazineService(LibraryContext context)
        {
            _magazineRepository = new EFGenericRepository<Magazine>(context);
        }

        public void Create(MagazineCreateView magazineViewModel)
        {
            _magazineRepository.Create(Mapper.Map<MagazineCreateView, Magazine>(magazineViewModel));
        }

        public MagazineGetView Get(int id)
        {
            var magazine = _magazineRepository.Get(id);
            if (magazine == null)
            {
                throw new BLLException("Magazine not found");
            }
            return Mapper.Map<Magazine, MagazineGetView>(magazine);
        }

        public MagazineGetAllView GetAll()
        {
            MagazineGetAllView result = new MagazineGetAllView();
            result.Magazines = Mapper.Map<IEnumerable<Magazine>, List<MagazineGetView>>(_magazineRepository.GetAll());
            return result;
        }

        public MagazineGetView Delete(int id)
        {
			var magazine = _magazineRepository.Get(id);
			if (magazine == null)
            {
                throw new BLLException("Magazine not found");
            }
            _magazineRepository.Delete(id);
			return Mapper.Map<Magazine, MagazineGetView>(magazine);
		}

        public void Update(MagazineUpdateView magazineViewModel)
        {
            if (_magazineRepository.Get(magazineViewModel.Id) == null)
            {
                throw new BLLException("Magazine not found");
            }
            _magazineRepository.Update(Mapper.Map<MagazineUpdateView, Magazine>(magazineViewModel));
        }

    }
}
