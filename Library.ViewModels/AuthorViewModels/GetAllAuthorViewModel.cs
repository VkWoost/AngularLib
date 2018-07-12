using System.Collections.Generic;

namespace Library.ViewModels.AuthorViewModels
{
	public class GetAllAuthorViewModel
    {
        public List<GetAuthorViewModel> Authors { get; set; }

        public GetAllAuthorViewModel()
        {
            Authors = new List<GetAuthorViewModel>();
        }
    }

	public class AuthorViewModel
	{
		public long Id { get; set; }
		public string Name { get; set; }
	}
}