using AutoMapper;
using Library.Entities.Enteties;
using Library.ViewModels.PublicationHouse;

namespace Library.BLL.Profiles
{
    public class PublicationHouseProfile : Profile
    {
        public PublicationHouseProfile()
        {
            CreateMap<PublicationHouse, PublicationHouseCreateView>();
            CreateMap<PublicationHouseCreateView, PublicationHouse>();

            CreateMap<PublicationHouse, PublicationHouseUpdateView>();
            CreateMap<PublicationHouseUpdateView, PublicationHouse>();

            CreateMap<PublicationHouse, PublicationHouseGetView>();
            CreateMap<PublicationHouseGetView, PublicationHouse>();

        }
    }
}
