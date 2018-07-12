using Library.ViewModels.PublicationHouseViewModels;

namespace Library.BLL.Interfaces
{
	public interface IPublicationHouseService
    {
		void Create(CreatePublicationHouseViewModel publicationHouseViewModel);
		GetPublicationHouseViewModel Get(long id);
		GetAllPublicationHouseViewModel GetAll();
		GetPublicationHouseViewModel Delete(long id);
		void Update(UpdatePublicationHouseViewModel publicationHouseViewModel);
	}
}
