﻿using Library.BLL.Infrastructure;
using Library.BLL.Interfaces;
using Library.DAL.Interfaces;
using Library.DAL.Repositories;
using Library.Entities.Enteties;
using Library.ViewModels.PublicationHouseViewModels;

namespace Library.BLL.Services
{
    public class PublicationHouseService : IPublicationHouseService
	{
        private IGEnericRepository<PublicationHouse> _publicationHouseRepo;

        public PublicationHouseService(string conn)
        {
            _publicationHouseRepo = new GenericRepository<PublicationHouse>(conn);
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
                throw new BLLException("Publication House not found");
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
                throw new BLLException("Publication House not found");
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
                throw new BLLException("Publication House not found");
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
