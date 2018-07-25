using Library.BusinessLogic.Infrastructure;
using Library.BusinessLogic.Interfaces;
using Library.DataAccess.Interfaces;
using Library.Entities.Entities;
using Library.ViewModels.AuthorViewModels;

namespace Library.BusinessLogic.Services
{
    public class AuthorService : IAuthorService
	{
        private IAuthorRepository _authorRepository;
		private IBookRepository _bookRepository;

        public AuthorService(IAuthorRepository authorRepository, IBookRepository bookRepository)
        {
            _authorRepository = authorRepository;
			_bookRepository = bookRepository;
        }

        public void Create(CreateAuthorViewModel authorViewModel)
        {
			var author = new Author()
			{
				Id = authorViewModel.Id,
				Name = authorViewModel.Name
			};
            
			_authorRepository.Create(author);
        }

        public GetAuthorViewModel Get(long id)
        {
            var author = _authorRepository.Get(id);
            if (author == null)
            {
                throw new BusinessLogicException("Author not found");
            }

			var result = new GetAuthorViewModel()
			{
				Id = author.Id,
				Name = author.Name
			};
			
			return result;
        }

        public GetAuthorListViewModel GetAll()
        {
			var authors = _authorRepository.GetAll();
			var result = new GetAuthorListViewModel();

			foreach (var author in authors)
			{
				result.Authors.Add(new AuthorGetAuthorListViewModelItem()
				{
					Id = author.Id,
					Name = author.Name
				});
			}
 
			return result;
        }

        public GetAuthorViewModel Delete(long id)
        {
			var author = _authorRepository.Get(id);

			if (author == null)
            {
                throw new BusinessLogicException("Author not found");
            }

            _authorRepository.Delete(id);
			_bookRepository.DeleteRangeByAuthorId(id);

			var result = new GetAuthorViewModel()
			{
				Id = author.Id,
				Name = author.Name
			};
			
			return result;
		}

        public void Update(UpdateAuthorViewModel authorViewModel)
        {
            if (_authorRepository.Get(authorViewModel.Id) == null)
            {
                throw new BusinessLogicException("Author not found");
            }
			
			var author = new Author()
			{
				Id = authorViewModel.Id,
				Name = authorViewModel.Name
			};
			
			_authorRepository.Update(author);
        }
    }
}
