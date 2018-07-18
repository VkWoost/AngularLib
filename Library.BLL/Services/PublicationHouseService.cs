using Library.BusinessLogic.Infrastructure;
using Library.BusinessLogic.Interfaces;
using Library.DataAccess.Repositories;
using Library.Entities.Enteties;
using Library.ViewModels.PublicationHouseViewModels;

namespace Library.BusinessLogic.Services
{
    public class PublicationHouseService : IPublicationHouseService
	{
        private PublicationHouseRepository _publicationHouseRepo;

        public PublicationHouseService(string connectionString)
        {
            _publicationHouseRepo = new PublicationHouseRepository(connectionString);
        }

        public void Create(CreatePublicationHouseViewModel publicationHouseViewModel)
        {

			var publicationHouse = new PublicationHouse()
			{
				Id = publicationHouseViewModel.Id,
				Name = publicationHouseViewModel.Name,
				Adress = publicationHouseViewModel.Adress
			};

            _publicationHouseRepo.Create(publicationHouse);
        }

        public GetPublicationHouseViewModel Get(long id)
        {
            var publicationHouse = _publicationHouseRepo.Get(id);
            if (publicationHouse == null)
            {
                throw new BusinessLogicException("Publication House not found");
            }

			var result = new GetPublicationHouseViewModel()
			{
				Id = publicationHouse.Id,
				Name = publicationHouse.Name,
				Adress = publicationHouse.Adress
			};
			return result;
        }

        public GetAllPublicationHouseViewModel GetAll()
        {
			var publicationHouses = _publicationHouseRepo.GetAll();
			var result = new GetAllPublicationHouseViewModel();

			foreach(var publicationHouse in publicationHouses){
				result.PublicationHouses.Add(new PublicationHouseViewItem()
				{
					Id = publicationHouse.Id,
					Name = publicationHouse.Name,
					Adress = publicationHouse.Adress
				});
			}

            return result;
        }

        public GetPublicationHouseViewModel Delete(long id)
        {
			var publicationHouse = _publicationHouseRepo.Get(id);
			if (publicationHouse == null)
            {
                throw new BusinessLogicException("Publication House not found");
            }

			var result = new GetPublicationHouseViewModel()
			{
				Id = publicationHouse.Id,
				Name = publicationHouse.Name,
				Adress = publicationHouse.Adress
			};

			_publicationHouseRepo.Delete(id);
			return result;
		}

		public void Update(UpdatePublicationHouseViewModel publicationHouseViewModel)
        {
            if (_publicationHouseRepo.Get(publicationHouseViewModel.Id) == null)
            {
                throw new BusinessLogicException("Publication House not found");
            }

			var publicationHouse = new PublicationHouse()
			{
				Id = publicationHouseViewModel.Id,
				Name = publicationHouseViewModel.Name,
				Adress = publicationHouseViewModel.Adress
			};

			_publicationHouseRepo.Update(publicationHouse);
        }

    }
}
