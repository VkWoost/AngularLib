using System.Collections.Generic;

namespace Library.ViewModels.Book
{
    public class BookGetAllView
    {
        public List<BookGetView> Books { get; set; }

        public BookGetAllView()
        {
            Books = new List<BookGetView>();
        }
    }
}
