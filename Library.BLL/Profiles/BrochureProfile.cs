using AutoMapper;
using Library.Entities.Enteties;
using Library.ViewModels;
using Library.ViewModels.Brochure;

namespace Library.BLL.Profiles
{
    public class BrochureProfile : Profile
    {
        public BrochureProfile()
        {
            CreateMap<Brochure, BrochureCreateView>();
            CreateMap<BrochureCreateView, Brochure>();

            CreateMap<Brochure, BrochureUpdateView>();
            CreateMap<BrochureUpdateView, Brochure>();

            CreateMap<Brochure, BrochureGetView>();
            CreateMap<BrochureGetView, Brochure>();
        }
    }
}
