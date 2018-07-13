using System.Collections.Generic;

namespace Library.ViewModels.BrochureViewModels
{
    public class GetAllBrochureViewModel
    {
        public List<BrochureViewItem> Brochures { get; set; }

        public GetAllBrochureViewModel()
        {
            Brochures = new List<BrochureViewItem>();
        }
    }

	public class BrochureViewItem
	{
		public long Id { get; set; }
		public string Name { get; set; }
		public string TypeOfCover { get; set; }
		public int NumberOfPages { get; set; }
	}
}
