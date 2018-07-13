using System.Collections.Generic;

namespace Library.ViewModels.PublicationHouseViewModels
{
	public class GetAllPublicationHouseViewModel
    {
        public List<PublicationHouseViewItem> PublicationHouses { get; set; }

        public GetAllPublicationHouseViewModel()
        {
            PublicationHouses = new List<PublicationHouseViewItem>();
        }
    }

	public class PublicationHouseViewItem
	{
		public long Id { get; set; }
		public string Name { get; set; }
		public string Adress { get; set; }
	}
}
