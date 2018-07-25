using System.Collections.Generic;

namespace Library.ViewModels.PublicationHouseViewModels
{
	public class GetPublicationHouseListViewModel
    {
        public List<PublicationHouseGetPublicationHouseListViewModelItem> PublicationHouses { get; set; }

        public GetPublicationHouseListViewModel()
        {
            PublicationHouses = new List<PublicationHouseGetPublicationHouseListViewModelItem>();
        }
    }

	public class PublicationHouseGetPublicationHouseListViewModelItem
	{
		public long Id { get; set; }
		public string Name { get; set; }
		public string Adress { get; set; }
	}
}
