using System.Collections.Generic;

namespace Library.ViewModels.AuthorViewModels
{
	public class GetAuthorListViewModel
    {
        public List<AuthorGetAuthorListViewModelItem> Authors { get; set; }

        public GetAuthorListViewModel()
        {
            Authors = new List<AuthorGetAuthorListViewModelItem>();
        }
    }

	public class AuthorGetAuthorListViewModelItem
	{
		public long Id { get; set; }
		public string Name { get; set; }
	}
}