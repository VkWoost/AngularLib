using System.Collections.Generic;

namespace Library.ViewModels.BrochureViewModels
{
    public class GetBrochureListViewModel
    {
        public List<BrochureGetBrochureListViewModelItem> Brochures { get; set; }

        public GetBrochureListViewModel()
        {
            Brochures = new List<BrochureGetBrochureListViewModelItem>();
        }
    }

	public class BrochureGetBrochureListViewModelItem
	{
		public long Id { get; set; }
		public string Name { get; set; }
		public string TypeOfCover { get; set; }
		public int NumberOfPages { get; set; }
	}
}
