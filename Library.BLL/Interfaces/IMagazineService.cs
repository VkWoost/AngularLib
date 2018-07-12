using Library.ViewModels.MagazineViewModels;

namespace Library.BLL.Interfaces
{
	public interface IMagazineService
    {
		void Create(CreateMagazineViewModel magazineViewModel);
		GetMagazineViewModel Get(long id);
		GetAllMagazineViewModel GetAll();
		GetMagazineViewModel Delete(long id);
		void Update(UpdateMagazineViewModel magazineViewModel);
	}
}
