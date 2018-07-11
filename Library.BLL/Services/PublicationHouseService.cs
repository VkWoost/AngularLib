using AutoMapper;
using Library.BLL.Infrastructure;
using Library.DAL;
using Library.DAL.Interfaces;
using Library.DAL.Repositories;
using Library.Entities.Enteties;
using Library.ViewModels.PublicationHouse;
using System.Collections.Generic;

namespace Library.BLL.Services
{
    public class PublicationHouseService
    {
        private IRepository<PublicationHouse> _publicationHouseRepo;

        public PublicationHouseService(LibraryContext context)
        {
            _publicationHouseRepo = new EFGenericRepository<PublicationHouse>(context);
        }

        public void Create(PublicationHouseCreateView publicationHouseViewModel)
        {
            _publicationHouseRepo.Create(Mapper.Map<PublicationHouseCreateView, PublicationHouse>(publicationHouseViewModel));
        }

        public PublicationHouseGetView Get(int id)
        {
            var publicationHouse = _publicationHouseRepo.Get(id);
            if (publicationHouse == null)
            {
                throw new BLLException("Publication House not found");
            }
            return Mapper.Map<PublicationHouse, PublicationHouseGetView>(publicationHouse);
        }

        public PublicationHouseGetAllView GetAll()
        {
            PublicationHouseGetAllView result = new PublicationHouseGetAllView();
            result.PublicationHouses = Mapper.Map<IEnumerable<PublicationHouse>, List<PublicationHouseGetView>>(_publicationHouseRepo.GetAll());
            return result;
        }

        public PublicationHouseGetView Delete(int id)
        {
			var publicationHouse = _publicationHouseRepo.Get(id);
			if (publicationHouse == null)
            {
                throw new BLLException("Publication House not found");
            }
            _publicationHouseRepo.Delete(id);
			return Mapper.Map<PublicationHouse, PublicationHouseGetView>(publicationHouse);
		}

		public void Update(PublicationHouseUpdateView publicationHouseViewModel)
        {
            if (_publicationHouseRepo.Get(publicationHouseViewModel.Id) == null)
            {
                throw new BLLException("Publication House not found");
            }
            _publicationHouseRepo.Update(Mapper.Map<PublicationHouseUpdateView, PublicationHouse>(publicationHouseViewModel));
        }

    }
}
