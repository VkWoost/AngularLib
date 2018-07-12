using Library.BLL.Infrastructure;
using Library.BLL.Interfaces;
using Library.DAL.Interfaces;
using Library.DAL.Repositories;
using Library.Entities.Enteties;
using Library.ViewModels.BrochureViewModels;
using System.Collections.Generic;

namespace Library.BLL.Services
{
    public class BrochureService : IBrochureService
    {
        private IGEnericRepository<Brochure> _brochureRepository;

        public BrochureService(string conn)
        {
            _brochureRepository = new GenericRepository<Brochure>(conn);
        }

        public void Create(CreateBrochureViewModel brochureViewModel)
        {
			Brochure brochure = new Brochure()
			{
				Id = brochureViewModel.Id,
				Name = brochureViewModel.Name,
				TypeOfCover = brochureViewModel.TypeOfCover,
				NumberOfPages = brochureViewModel.NumberOfPages
			};

            _brochureRepository.Create(brochure);
        }

        public GetBrochureViewModel Get(long id)
        {
            var brochure = _brochureRepository.Get(id);
            if (brochure == null)
            {
                throw new BLLException("Brochure not found");
            }

			GetBrochureViewModel result = new GetBrochureViewModel() 
			{
				Id = brochure.Id,
				Name = brochure.Name,
				TypeOfCover = brochure.TypeOfCover,
				NumberOfPages = brochure.NumberOfPages
			};

			return result;
        }

        public GetAllBrochureViewModel GetAll()
        {
			IEnumerable<Brochure> brochures = _brochureRepository.GetAll();
			GetAllBrochureViewModel result = new GetAllBrochureViewModel();

			foreach(var brochure in brochures){
				result.Brochures.Add(new BrochureViewModel()
				{
					Id = brochure.Id,
					Name = brochure.Name,
					NumberOfPages = brochure.NumberOfPages,
					TypeOfCover = brochure.TypeOfCover
				});
			}
            return result;
        }

        public GetBrochureViewModel Delete(long id)
        {
			var brochure = _brochureRepository.Get(id);
			if (brochure == null)
            {
                throw new BLLException("Brochure not found");
            }
			var result = new GetBrochureViewModel()
			{
				Id = brochure.Id,
				Name = brochure.Name,
				TypeOfCover = brochure.TypeOfCover,
				NumberOfPages = brochure.NumberOfPages
			}; 
			            
			_brochureRepository.Delete(id);
			return result;
		}

        public void Update(BrochureUpdateView brochureViewModel)
        {
            if (_brochureRepository.Get(brochureViewModel.Id) == null)
            {
                throw new BLLException("Brochure not found");
            }

			Brochure brochure = new Brochure()
			{
				Id = brochureViewModel.Id,
				Name = brochureViewModel.Name,
				TypeOfCover = brochureViewModel.TypeOfCover,
				NumberOfPages = brochureViewModel.NumberOfPages
			};

			_brochureRepository.Update(brochure);
        }

    }
}
