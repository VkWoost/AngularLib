using System.Collections.Generic;

namespace Library.ViewModels.Book
{
    public class BookCreateView
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int YearOfPublication { get; set; }
        public int? AuthorId { get; set; }
        public List<int> PublicationHouseIds { get; set; }
    }
}
