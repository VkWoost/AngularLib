using Library.ViewModels.Author;
using Library.ViewModels.PublicationHouse;
using System.Collections.Generic;

namespace Library.ViewModels.Book
{
    public class BookUpdateView
    {
		public int Id { get; set; }
		public string Name { get; set; }
		public int YearOfPublication { get; set; }
		public int? AuthorId { get; set; }
		public AuthorGetView Author { get; set; }
		public List<PublicationHouseGetView> PublicationHouses { get; set; }
	}
}
