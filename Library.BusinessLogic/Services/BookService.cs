using Library.BusinessLogic.Infrastructure;
using Library.BusinessLogic.Interfaces;
using Library.DataAccess.Interfaces;
using Library.Entities.Entities;
using Library.ViewModels.AuthorViewModels;
using Library.ViewModels.BookViewModels;
using Library.ViewModels.PublicationHouseViewModels;
using System.Collections.Generic;
using System.Linq;

namespace Library.BusinessLogic.Services
{
	public class BookService : IBookService
	{
		private IBookRepository _bookRepository;
		private IPublicationHousesInBookRepository _publicationHouseInBookRepository;
		private IAuthorRepository _authorRepository;
		private IPublicationHouseRepository _publicationHouseRepository;

		public BookService
		(
			IBookRepository bookRepository,
			IPublicationHousesInBookRepository publicationHousesInBookRepository,
			IAuthorRepository authorRepository,
			IPublicationHouseRepository publicationHouseRepository
		)
		{
			_bookRepository = bookRepository;
			_authorRepository = authorRepository;
			_publicationHouseInBookRepository = publicationHousesInBookRepository;
			_publicationHouseRepository = publicationHouseRepository;
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

		public GetBookListViewModel GetAll()
		{
			var books = _bookRepository.GetAll();
			var result = new GetBookListViewModel();

			foreach (var book in books)
			{
				result.Books.Add(new BookGetBookListViewModelItem()
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
			var publicHouseBook = _publicationHouseInBookRepository.GetAll();

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

			_publicationHouseInBookRepository.DeleteByBookId(id);

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

		private void AddPublicationHouses(long bookId, List<long> publicationHouseIds)
		{
			var publicationHouses = new List<PublicationHousesInBook>();

			foreach (var publicationHouse in publicationHouseIds)
			{
				publicationHouses.Add(new PublicationHousesInBook(bookId, publicationHouse));
			}

			_publicationHouseInBookRepository.Create(publicationHouses);
		}

		private void UpdatePublicationHouses(long bookId, List<long> publicHouseIds)
		{
			_publicationHouseInBookRepository.DeleteByBookId(bookId);
			AddPublicationHouses(bookId, publicHouseIds);
		}
	}
}