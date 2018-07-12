using Library.BLL.Infrastructure;
using Library.BLL.Interfaces;
using Library.DAL.Interfaces;
using Library.DAL.Repositories;
using Library.Entities.Enteties;
using Library.ViewModels.BookViewModels;
using System.Collections.Generic;
using System.Linq;

namespace Library.BLL.Services
{
    public class BookService : IBookService
    {
        private IBookRepository _bookRepository;
		private IPublicationHousesInBookRepository _pHouseBookRepository;
        private IAuthorService _authorService;
		private IPublicationHouseService _publicationHouseService;

        public BookService(string conn)
        {
            _bookRepository = new BookRepository(conn);
			_pHouseBookRepository = new PublicationHousesInBookRepository(conn);
            _authorService = new AuthorService(conn);
			_publicationHouseService = new PublicationHouseService(conn);
        }

        public void Create(CreateBookViewModel bookViewModel)
        {
			Book book = new Book()
			{
				Id = bookViewModel.Id,
				Name = bookViewModel.Name,
				AuthorId = bookViewModel.Author.Id,
				YearOfPublication = bookViewModel.YearOfPublication
			};
			bookViewModel.AuthorId = bookViewModel.Author.Id;
			
			int bookId = _bookRepository.CreateBook(book);
			AddPublicationHouses(bookId, bookViewModel.PublicationHouses.Select(x => x.Id).ToList());
        }
        
        public GetBookViewModel Get(long id)
        {
            var book = _bookRepository.Get(id);
            if (book == null)
            {
                throw new BLLException("Book not found");
            }

			GetBookViewModel result = new GetBookViewModel()
			{
				Id = book.Id,
				Name = book.Name,
				AuthorId = book.AuthorId,
				YearOfPublication = book.YearOfPublication
			};
            
			result.Author = _authorService.Get(result.AuthorId.Value);
            return result;
        }

        public GetAllBookViewModel GetAll()
        {
			IEnumerable<Book> books = _bookRepository.GetAll();
			GetAllBookViewModel result = new GetAllBookViewModel();

			foreach( var book in books){
				result.Books.Add(new GetBookViewModel() 
				{
					Id = book.Id,
					Name = book.Name,
					AuthorId = book.AuthorId,
					YearOfPublication = book.YearOfPublication
				});
			}

            var authors = _authorService.GetAll();
			var pHouses = _publicationHouseService.GetAll().PublicationHouses;
			var publicHouseBook = _pHouseBookRepository.GetAll();

			foreach (var book in result.Books)
            {
                book.Author = authors.Authors.FirstOrDefault(x => x.Id == book.AuthorId);
				var currentPublicHouseBook = publicHouseBook.Where(x => x.BookId == book.Id).Select(x=>x.PublicationHouseId).ToList();
				book.PublicationHouses = pHouses.Where(x => currentPublicHouseBook.Contains(x.Id)).ToList();
            }
            return result;
        }

        public GetBookViewModel Delete(long id)
        {
			var book = _bookRepository.Get(id);
			if (book == null)
            {
                throw new BLLException("Book not found");
            }
            DeletePublicationHouseBooks(id);
			_bookRepository.Delete(id);

			GetBookViewModel result = new GetBookViewModel()
			{
				Id = book.Id,
				Name = book.Name,
				AuthorId = book.AuthorId,
				YearOfPublication = book.YearOfPublication
			};
			return result;
		}

        public void Update(UpdateBookViewModel bookViewModel)
        {
            if (_bookRepository.Get(bookViewModel.Id) == null)
            {
                throw new BLLException("Book not found");
            }
			bookViewModel.AuthorId = bookViewModel.Author.Id;

			Book book = new Book()
			{
				Id = bookViewModel.Id,
				Name = bookViewModel.Name,
				AuthorId = bookViewModel.Author.Id,
				YearOfPublication = bookViewModel.YearOfPublication
			};
			bookViewModel.AuthorId = bookViewModel.Author.Id;

			_bookRepository.Update(book);
			UpdatePublicationHouses(bookViewModel.Id, bookViewModel.PublicationHouses.Select(x => x.Id).ToList());
        }

		private void AddPublicationHouses(long bookId, List<long> publicHouseIds){
			var publicationHouses = new List<PublicationHousesInBook>();
			foreach (var publicHouse in publicHouseIds)
			{
				publicationHouses.Add(new PublicationHousesInBook(bookId, publicHouse));
			}
			_pHouseBookRepository.Create(publicationHouses);
		}
		private void DeletePublicationHouseBooks(long bookId){
			_pHouseBookRepository.DeleteByBookId(bookId);
		}
		private void UpdatePublicationHouses(long bookId, List<long>publicHouseIds){
			DeletePublicationHouseBooks(bookId);
			AddPublicationHouses(bookId, publicHouseIds);
		}
	}
}