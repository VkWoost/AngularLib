using System.Collections.Generic;

namespace Library.ViewModels.BrochureViewModels
{
    public class GetAllBrochureViewModel
    {
        public List< BrochureViewModel> Brochures { get; set; }

        public GetAllBrochureViewModel()
        {
            Brochures = new List<BrochureViewModel>();
        }
    }

	public class BrochureViewModel
	{
		public long Id { get; set; }
		public string Name { get; set; }
		public string TypeOfCover { get; set; }
		public int NumberOfPages { get; set; }
	}
}
