using AutoMapper;
using Library.BLL.Infrastructure;
using Library.DAL;
using Library.DAL.Repositories;
using Library.Entities.Enteties;
using Library.ViewModels.Book;
using System.Collections.Generic;
using System.Linq;

namespace Library.BLL.Services
{
    public class BookService
    {
        private BookRepository _bookRepository;
		private PublicationHouseBookRepository _pHouseBookRepository;
        private AuthorService _authorService;
		private PublicationHouseService _publicationHouseService;

        public BookService(LibraryContext context)
        {
            _bookRepository = new BookRepository(context);
			_pHouseBookRepository = new PublicationHouseBookRepository(context);
            _authorService = new AuthorService(context);
			_publicationHouseService = new PublicationHouseService(context);
        }

        public void Create(BookCreateView bookViewModel)
        {
			bookViewModel.AuthorId = bookViewModel.Author.Id;
			int bookId = _bookRepository.CreateBook(Mapper.Map<BookCreateView, Book>(bookViewModel));
			AddPublicationHouses(bookId, bookViewModel.PublicationHouses.Select(x => x.Id).ToList());
        }
        
        public BookGetView Get(int id)
        {
            var book = _bookRepository.Get(id);
            if (book == null)
            {
                throw new BLLException("Book not found");
            }
            var result = Mapper.Map<Book, BookGetView>(book);
            result.Author = _authorService.Get(result.AuthorId.Value);
            return result;
        }

        public BookGetAllView GetAll()
        {
            BookGetAllView result = new BookGetAllView();
            result.Books = Mapper.Map<IEnumerable<Book>, List<BookGetView>>(_bookRepository.GetAll());

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

        public BookGetView Delete(int id)
        {
			var item = _bookRepository.Get(id);
			if (item == null)
            {
                throw new BLLException("Book not found");
            }
            _bookRepository.Delete(id);
			DeletePublicationHouses(id);
			return Mapper.Map<Book, BookGetView>(item);
		}

        public void Update(BookUpdateView bookViewModel)
        {
            if (_bookRepository.Get(bookViewModel.Id) == null)
            {
                throw new BLLException("Book not found");
            }
			bookViewModel.AuthorId = bookViewModel.Author.Id;
			_bookRepository.Update(Mapper.Map<BookUpdateView, Book>(bookViewModel));
			UpdatePublicationHouses(bookViewModel.Id, bookViewModel.PublicationHouses.Select(x => x.Id).ToList());
        }

		private void AddPublicationHouses(int bookId, List<int> publicHouseIds){
			var publicationHouses = new List<PublicationHouseBook>();
			foreach (var publicHouse in publicHouseIds)
			{
				publicationHouses.Add(new PublicationHouseBook(bookId, publicHouse));
			}
			_pHouseBookRepository.Create(publicationHouses);
		}
		private void DeletePublicationHouses(int bookId){
			var deletedItems = _pHouseBookRepository.GetAll().Where(x => x.BookId == bookId).ToList();
			_pHouseBookRepository.Delete(deletedItems);
		}
		private void UpdatePublicationHouses(int bookId, List<int>publicHouseIds){
			DeletePublicationHouses(bookId);
			AddPublicationHouses(bookId, publicHouseIds);
		}
	}
}