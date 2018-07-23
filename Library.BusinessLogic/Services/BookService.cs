using Library.BusinessLogic.Infrastructure;
using Library.BusinessLogic.Interfaces;
using Library.DataAccess.Repositories;
using Library.Entities.Enteties;
using Library.ViewModels.AuthorViewModels;
using Library.ViewModels.BookViewModels;
using Library.ViewModels.PublicationHouseViewModels;
using System.Collections.Generic;
using System.Linq;

namespace Library.BusinessLogic.Services
{
	public class BookService : IBookService
	{
		private BookRepository _bookRepository;
		private PublicationHousesInBookRepository _pHouseBookRepository;
		private AuthorRepository _authorRepository;
		private PublicationHouseRepository _publicationHouseRepository;

		public BookService(string connectionString)
		{
			_bookRepository = new BookRepository(connectionString);
			_authorRepository = new AuthorRepository(connectionString);
			_pHouseBookRepository = new PublicationHousesInBookRepository(connectionString);
			_publicationHouseRepository = new PublicationHouseRepository(connectionString);
		}

		public void Create(CreateBookViewModel bookViewModel)
		{
			var book = new Book()
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
				throw new BusinessLogicException("Book not found");
			}

			var result = new GetBookViewModel()
			{
				Id = book.Id,
				Name = book.Name,
				AuthorId = book.AuthorId,
				YearOfPublication = book.YearOfPublication
			};

			var author = _authorRepository.Get(result.AuthorId.Value);
			result.Author = new GetAuthorViewModel()
			{
				Id = author.Id,
				Name = author.Name
			};
			return result;
		}

		public GetAllBookViewModel GetAll()
		{
			var books = _bookRepository.GetAll();
			var result = new GetAllBookViewModel();

			foreach (var book in books)
			{
				result.Books.Add(new BookViewItem()
				{
					Id = book.Id,
					Name = book.Name,
					AuthorId = book.AuthorId,
					YearOfPublication = book.YearOfPublication,
					Author = new GetAuthorViewModel()
					{
						Id = book.Author.Id,
						Name = book.Author.Name
					}
				});
			}

			var pHouses = _publicationHouseRepository.GetAll();
			var publicHouseBook = _pHouseBookRepository.GetAll();

			foreach (var book in result.Books)
			{
				var currentPublicHouseBook = publicHouseBook.Where(x => x.BookId == book.Id).Select(x => x.PublicationHouseId).ToList();

				var publicationHouses = pHouses.Where(x => currentPublicHouseBook.Contains(x.Id)).ToList();

				book.PublicationHouses = new List<GetPublicationHouseViewModel>();
				foreach (var publicationHouse in publicationHouses)
				{
					book.PublicationHouses.Add(new GetPublicationHouseViewModel()
					{
						Id = publicationHouse.Id,
						Name = publicationHouse.Name,
						Adress = publicationHouse.Adress
					});
				}
			}
			return result;
		}

		public GetBookViewModel Delete(long id)
		{
			var book = _bookRepository.Get(id);
			if (book == null)
			{
				throw new BusinessLogicException("Book not found");
			}

			DeletePublicationHouseBooks(id);

			_bookRepository.Delete(id);

			var result = new GetBookViewModel()
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
				throw new BusinessLogicException("Book not found");
			}

			bookViewModel.AuthorId = bookViewModel.Author.Id;

			var book = new Book()
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

		private void AddPublicationHouses(long bookId, List<long> publicHouseIds)
		{
			var publicationHouses = new List<PublicationHousesInBook>();

			foreach (var publicHouse in publicHouseIds)
			{
				publicationHouses.Add(new PublicationHousesInBook(bookId, publicHouse));
			}

			_pHouseBookRepository.Create(publicationHouses);
		}

		private void DeletePublicationHouseBooks(long bookId)
		{
			_pHouseBookRepository.DeleteByBookId(bookId);
		}

		private void UpdatePublicationHouses(long bookId, List<long> publicHouseIds)
		{
			DeletePublicationHouseBooks(bookId);
			AddPublicationHouses(bookId, publicHouseIds);
		}
	}
}