using AutoMapper;
using Library.BLL.Infrastructure;
using Library.DAL;
using Library.DAL.Interfaces;
using Library.DAL.Repositories;
using Library.Entities.Enteties;
using Library.ViewModels.Brochure;
using System.Collections.Generic;

namespace Library.BLL.Services
{
    public class BrochureService
    {
        private IRepository<Brochure> _brochureRepository;

        public BrochureService(LibraryContext context)
        {
            _brochureRepository = new EFGenericRepository<Brochure>(context);
        }

        public void Create(BrochureCreateView brochureViewModel)
        {
            _brochureRepository.Create(Mapper.Map<BrochureCreateView, Brochure>(brochureViewModel));
        }

        public BrochureGetView Get(int id)
        {
            var brochure = _brochureRepository.Get(id);
            if (brochure == null)
            {
                throw new BLLException("Brochure not found");
            }
            return Mapper.Map<Brochure, BrochureGetView>(brochure);
        }

        public BrochureGetAllView GetAll()
        {
            BrochureGetAllView result = new BrochureGetAllView();
            result.Brochures = Mapper.Map<IEnumerable<Brochure>, List<BrochureGetView>>(_brochureRepository.GetAll());
            return result;
        }

        public BrochureGetView Delete(int id)
        {
			var brochure = _brochureRepository.Get(id);
			if (brochure == null)
            {
                throw new BLLException("Brochure not found");
            }
            _brochureRepository.Delete(id);
			return Mapper.Map<Brochure, BrochureGetView>(brochure);
		}

        public void Update(BrochureUpdateView brochureViewModel)
        {
            if (_brochureRepository.Get(brochureViewModel.Id) == null)
            {
                throw new BLLException("Brochure not found");
            }
            _brochureRepository.Update(Mapper.Map<BrochureUpdateView, Brochure>(brochureViewModel));
        }

    }
}
