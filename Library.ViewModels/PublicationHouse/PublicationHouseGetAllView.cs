using System.Collections.Generic;

namespace Library.ViewModels.PublicationHouse
{
    public class PublicationHouseGetAllView
    {
        public List<PublicationHouseGetView> PublicationHouses { get; set; }

        public PublicationHouseGetAllView()
        {
            PublicationHouses = new List<PublicationHouseGetView>();
        }
    }
}
