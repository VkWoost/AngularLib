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
        private AuthorService _authorService;

        public BookService(LibraryContext context)
        {
            _bookRepository = new EFGenericRepository<Book>(context);
            _authorService = new AuthorService(context);
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
                throw new BLLException("Author not found");
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
            foreach(var i in result.Books)
            {
                i.Author = authors.Authors.FirstOrDefault(x => x.Id == i.AuthorId);
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
                throw new BLLException("Author not found");
            }
            _bookRepository.Update(Mapper.Map<BookUpdateView, Book>(bookViewModel));
        }
    }
}
