using System.Collections.Generic;

namespace Library.ViewModels.MagazineViewModels
{
	public class GetMagazineListViewModel
    {
        public List<MagazineGetMagazineListViewModelItem> Magazines { get; set; }

        public GetMagazineListViewModel()
        {
            Magazines = new List<MagazineGetMagazineListViewModelItem>();
        }
    }

	public class MagazineGetMagazineListViewModelItem
	{
		public long Id { get; set; }
		public string Name { get; set; }
		public int Number { get; set; }
		public int YearOfPublication { get; set; }
	}
}
