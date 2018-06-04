using System.Collections.Generic;

namespace Library.ViewModels.Magazine
{
    public class MagazineGetAllView
    {
        public List<MagazineGetView> Magazines { get; set; }

        public MagazineGetAllView()
        {
            Magazines = new List<MagazineGetView>();
        }
    }
}
