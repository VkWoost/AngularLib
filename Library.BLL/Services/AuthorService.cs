using Library.BLL.Infrastructure;
using Library.BLL.Interfaces;
using Library.DAL.Interfaces;
using Library.DAL.Repositories;
using Library.Entities.Enteties;
using Library.ViewModels.AuthorViewModels;

namespace Library.BLL.Services
{
    public class AuthorService : IAuthorService
	{
        private IGEnericRepository<Author> _authorRepository;
		private IBookRepository _bookRepository;

        public AuthorService(string conn)
        {
            _authorRepository = new GenericRepository<Author>(conn);
			_bookRepository = new BookRepository(conn);
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
                throw new BLLException("Author not found");
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
                throw new BLLException("Author not found");
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
                throw new BLLException("Author not found");
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
