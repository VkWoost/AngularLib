using Library.ViewModels.AuthorViewModels;

namespace Library.BusinessLogic.Interfaces
{
	public interface IAuthorService
    {
		void Create(CreateAuthorViewModel authorViewModel);
		GetAuthorViewModel Get(long id);
		GetAllAuthorViewModel GetAll();
		GetAuthorViewModel Delete(long id);
		void Update(UpdateAuthorViewModel authorViewModel);
	}
}
