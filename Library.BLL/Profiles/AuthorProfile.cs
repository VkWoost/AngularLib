using AutoMapper;
using Library.Entities.Enteties;
using Library.ViewModels.Author;

namespace Library.BLL.Profiles
{
    public class AuthorProfile : Profile
    {
        public AuthorProfile()
        {
            CreateMap<Author, AuthorCreateView>();
            CreateMap<AuthorCreateView, Author>();

            CreateMap<Author, AuthorUpdateView>();
            CreateMap<AuthorUpdateView, Author>();

            CreateMap<Author, AuthorGetView>();
            CreateMap<AuthorGetView, Author>();
        }
    }
}
