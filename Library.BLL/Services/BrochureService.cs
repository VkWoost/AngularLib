using Library.BusinessLogic.Infrastructure;
using Library.BusinessLogic.Interfaces;
using Library.DataAccess.Interfaces;
using Library.DataAccess.Repositories;
using Library.Entities.Enteties;
using Library.ViewModels.BrochureViewModels;

namespace Library.BusinessLogic.Services
{
    public class BrochureService : IBrochureService
    {
        private IGEnericRepository<Brochure> _brochureRepository;

        public BrochureService(string connectionString)
        {
            _brochureRepository = new GenericRepository<Brochure>(connectionString);
        }

        public void Create(CreateBrochureViewModel brochureViewModel)
        {
			var brochure = new Brochure()
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
                throw new BusinessLogicException("Brochure not found");
            }

			var result = new GetBrochureViewModel() 
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
			var brochures = _brochureRepository.GetAll();
			var result = new GetAllBrochureViewModel();

			foreach(var brochure in brochures){
				result.Brochures.Add(new BrochureViewItem()
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
                throw new BusinessLogicException("Brochure not found");
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
                throw new BusinessLogicException("Brochure not found");
            }

			var brochure = new Brochure()
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
