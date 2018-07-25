using Library.ViewModels.BrochureViewModels;

namespace Library.BusinessLogic.Interfaces
{
	public interface IBrochureService
    {
		void Create(CreateBrochureViewModel brochureViewModel);
		GetBrochureViewModel Get(long id);
		GetBrochureListViewModel GetAll();
		GetBrochureViewModel Delete(long id);
		void Update(BrochureUpdateView brochureViewModel);
	}
}
