using Library.BusinessLogic.Infrastructure;
using Library.BusinessLogic.Interfaces;
using Library.DataAccess.Interfaces;
using Library.DataAccess.Repositories;
using Library.Entities.Enteties;
using Library.ViewModels.MagazineViewModels;

namespace Library.BusinessLogic.Services
{
    public class MagazineService : IMagazineService
    {
        private IGEnericRepository<Magazine> _magazineRepository;

        public MagazineService(string connectionString)
        {
            _magazineRepository = new GenericRepository<Magazine>(connectionString);
        }

        public void Create(CreateMagazineViewModel magazineViewModel)
        {
			var magazine = new Magazine()
			{
				Id = magazineViewModel.Id,
				Name = magazineViewModel.Name,
				Number = magazineViewModel.Number,
				YearOfPublication = magazineViewModel.YearOfPublication
			};

            _magazineRepository.Create(magazine);
        }

        public GetMagazineViewModel Get(long id)
        {
            var magazine = _magazineRepository.Get(id);
            if (magazine == null)
            {
                throw new BusinessLogicException("Magazine not found");
            }

			var result = new GetMagazineViewModel()
			{
				Id = magazine.Id,
				Name = magazine.Name,
				Number = magazine.Number,
				YearOfPublication = magazine.YearOfPublication
			};

			return result;
        }

        public GetAllMagazineViewModel GetAll()
        {
			var magazines = _magazineRepository.GetAll();
			var result = new GetAllMagazineViewModel();

			foreach(var magazine in magazines){
				result.Magazines.Add(new MagazineViewItem() 
				{ 
					Id = magazine.Id,
					Name = magazine.Name,
					Number = magazine.Number,
					YearOfPublication = magazine.YearOfPublication
				});
			}

            return result;
        }

        public GetMagazineViewModel Delete(long id)
        {
			var magazine = _magazineRepository.Get(id);
			if (magazine == null)
            {
                throw new BusinessLogicException("Magazine not found");
            }

			var result = new GetMagazineViewModel()
			{
				Id = magazine.Id,
				Name = magazine.Name,
				Number = magazine.Number,
				YearOfPublication = magazine.YearOfPublication
			};

			_magazineRepository.Delete(id);
			return result;
		}

        public void Update(UpdateMagazineViewModel magazineViewModel)
        {
            if (_magazineRepository.Get(magazineViewModel.Id) == null)
            {
                throw new BusinessLogicException("Magazine not found");
            }

			var magazine = new Magazine()
			{
				Id = magazineViewModel.Id,
				Name = magazineViewModel.Name,
				Number = magazineViewModel.Number,
				YearOfPublication = magazineViewModel.YearOfPublication
			};

			_magazineRepository.Update(magazine);
        }

    }
}
