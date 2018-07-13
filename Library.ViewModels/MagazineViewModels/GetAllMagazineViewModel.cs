using System.Collections.Generic;

namespace Library.ViewModels.MagazineViewModels
{
	public class GetAllMagazineViewModel
    {
        public List<MagazineViewItem> Magazines { get; set; }

        public GetAllMagazineViewModel()
        {
            Magazines = new List<MagazineViewItem>();
        }
    }

	public class MagazineViewItem
	{
		public long Id { get; set; }
		public string Name { get; set; }
		public int Number { get; set; }
		public int YearOfPublication { get; set; }
	}
}
