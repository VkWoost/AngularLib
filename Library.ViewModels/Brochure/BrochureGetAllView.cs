using System.Collections.Generic;

namespace Library.ViewModels.Brochure
{
    public class BrochureGetAllView
    {
        public List<BrochureGetView> Brochures { get; set; }

        public BrochureGetAllView()
        {
            Brochures = new List<BrochureGetView>();
        }
    }
}
