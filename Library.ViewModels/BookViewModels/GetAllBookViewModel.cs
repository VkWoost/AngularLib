using Library.ViewModels.AuthorViewModels;
using Library.ViewModels.PublicationHouseViewModels;
using System.Collections.Generic;

namespace Library.ViewModels.BookViewModels
{
	public class GetAllBookViewModel
    {
        public List<BookViewItem> Books { get; set; }

        public GetAllBookViewModel()
        {
            Books = new List<BookViewItem>();
        }
    }

	public class BookViewItem{
		public long Id { get; set; }
		public string Name { get; set; }
		public int YearOfPublication { get; set; }
		public long? AuthorId { get; set; }
		public GetAuthorViewModel Author { get; set; }
		public List<GetPublicationHouseViewModel> PublicationHouses { get; set; }
	}
}
