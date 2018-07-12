using System.Collections.Generic;

namespace Library.ViewModels.BookViewModels
{
	public class GetAllBookViewModel
    {
        public List<GetBookViewModel> Books { get; set; }

        public GetAllBookViewModel()
        {
            Books = new List<GetBookViewModel>();
        }
    }
}
