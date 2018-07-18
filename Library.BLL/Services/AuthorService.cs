using Library.BusinessLogic.Infrastructure;
using Library.BusinessLogic.Interfaces;
using Library.DataAccess.Repositories;
using Library.Entities.Enteties;
using Library.ViewModels.AuthorViewModels;

namespace Library.BusinessLogic.Services
{
    public class AuthorService : IAuthorService
	{
        private AuthorRepository _authorRepository;
		private BookRepository _bookRepository;

        public AuthorService(string connectionString)
        {
            _authorRepository = new AuthorRepository(connectionString);
			_bookRepository = new BookRepository(connectionString);
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

        public GetAllAuthorViewModel GetAll()
        {
			var authors = _authorRepository.GetAll();
			var result = new GetAllAuthorViewModel();

			foreach (var author in authors)
			{
				result.Authors.Add(new AuthorViewItem()
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
			DeleteBooksByAuthorId(id);

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

		private void DeleteBooksByAuthorId(long id)
		{
			_bookRepository.DeleteRangeByAuthorId(id);
		}
    }
}
