using AutoMapper;
using Library.Entities.Enteties;
using Library.ViewModels.Magazine;

namespace Library.BLL.Profiles
{
    public class MagazineProfile : Profile
    {
        public MagazineProfile()
        {
            CreateMap<Magazine, MagazineCreateView>();
            CreateMap<MagazineCreateView, Magazine>();

            CreateMap<Magazine, MagazineUpdateView>();
            CreateMap<MagazineUpdateView, Magazine>();

            CreateMap<Magazine, MagazineGetView>();
            CreateMap<MagazineGetView, Magazine>();

        }
    }
}
