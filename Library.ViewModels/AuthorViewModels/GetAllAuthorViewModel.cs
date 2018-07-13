using System.Collections.Generic;

namespace Library.ViewModels.AuthorViewModels
{
	public class GetAllAuthorViewModel
    {
        public List<AuthorViewItem> Authors { get; set; }

        public GetAllAuthorViewModel()
        {
            Authors = new List<AuthorViewItem>();
        }
    }

	public class AuthorViewItem
	{
		public long Id { get; set; }
		public string Name { get; set; }
	}
}