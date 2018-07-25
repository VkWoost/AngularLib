using Library.ViewModels.MagazineViewModels;

namespace Library.BusinessLogic.Interfaces
{
	public interface IMagazineService
    {
		void Create(CreateMagazineViewModel magazineViewModel);
		GetMagazineViewModel Get(long id);
		GetMagazineListViewModel GetAll();
		GetMagazineViewModel Delete(long id);
		void Update(UpdateMagazineViewModel magazineViewModel);
	}
}
