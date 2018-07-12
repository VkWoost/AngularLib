using Library.ViewModels.BrochureViewModels;

namespace Library.BLL.Interfaces
{
	public interface IBrochureService
    {
		void Create(CreateBrochureViewModel brochureViewModel);
		GetBrochureViewModel Get(long id);
		GetAllBrochureViewModel GetAll();
		GetBrochureViewModel Delete(long id);
		void Update(BrochureUpdateView brochureViewModel);
	}
}
