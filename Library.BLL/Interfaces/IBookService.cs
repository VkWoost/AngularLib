using Library.ViewModels.BookViewModels;

namespace Library.BusinessLogic.Interfaces
{
	public interface IBookService
    {
		void Create(CreateBookViewModel bookViewModel);
		GetBookViewModel Get(long id);
		GetAllBookViewModel GetAll();
		GetBookViewModel Delete(long id);
		void Update(UpdateBookViewModel bookViewModel);
	}
}
