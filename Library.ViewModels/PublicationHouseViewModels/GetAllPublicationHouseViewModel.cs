using System.Collections.Generic;

namespace Library.ViewModels.PublicationHouseViewModels
{
	public class GetAllPublicationHouseViewModel
    {
        public List<GetPublicationHouseViewModel> PublicationHouses { get; set; }

        public GetAllPublicationHouseViewModel()
        {
            PublicationHouses = new List<GetPublicationHouseViewModel>();
        }
    }
}
