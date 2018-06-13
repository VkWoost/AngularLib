using AutoMapper;
using Library.BLL.Infrastructure;
using Library.DAL;
using Library.DAL.Interfaces;
using Library.DAL.Repositories;
using Library.Entities.Enteties;
using Library.ViewModels.Book;
using System.Collections.Generic;
using System.Linq;

namespace Library.BLL.Services
{
    public class BookService
    {
        private IRepository<Book> _bookRepository;
		private PublicationHouseBookRepository _pHouseBookRepository;
        private AuthorService _authorService;
		private PublicationHouseService _publicationHouseService;

        public BookService(LibraryContext context)
        {
            _bookRepository = new EFGenericRepository<Book>(context);
			_pHouseBookRepository = new PublicationHouseBookRepository(context);
            _authorService = new AuthorService(context);
			_publicationHouseService = new PublicationHouseService(context);
        }

        public void Create(BookCreateView bookViewModel)
        {
            _bookRepository.Create(Mapper.Map<BookCreateView, Book>(bookViewModel));

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

        public void Delete(int id)
        {
            if (_bookRepository.Get(id) == null)
            {
                throw new BLLException("Book not found");
            }
            _bookRepository.Delete(id);
        }

        public void Update(BookUpdateView bookViewModel)
        {
            if (_bookRepository.Get(bookViewModel.Id) == null)
            {
                throw new BLLException("Book not found");
            }
            _bookRepository.Update(Mapper.Map<BookUpdateView, Book>(bookViewModel));
        }
    }
}