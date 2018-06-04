using AutoMapper;
using Library.Entities.Enteties;
using Library.ViewModels.Book;

namespace Library.BLL.Profiles
{
    public class BookProfile : Profile
    {
        public BookProfile()
        {
            CreateMap<Book, BookCreateView>();
            CreateMap<BookCreateView, Book>();

            CreateMap<Book, BookUpdateView>();
            CreateMap<BookUpdateView, Book>();

            CreateMap<Book, BookGetView>();
            CreateMap<BookGetView, Book>();

        }
    }
}
