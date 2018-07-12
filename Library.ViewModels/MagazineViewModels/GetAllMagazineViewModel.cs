using System.Collections.Generic;

namespace Library.ViewModels.MagazineViewModels
{
	public class GetAllMagazineViewModel
    {
        public List<MagazineViewModel> Magazines { get; set; }

        public GetAllMagazineViewModel()
        {
            Magazines = new List<MagazineViewModel>();
        }
    }

	public class MagazineViewModel
	{
		public long Id { get; set; }
		public string Name { get; set; }
		public int Number { get; set; }
		public int YearOfPublication { get; set; }
	}
}
