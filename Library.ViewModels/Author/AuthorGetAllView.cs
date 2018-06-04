using System.Collections.Generic;

namespace Library.ViewModels.Author
{
    public class AuthorGetAllView
    {
        public List<AuthorGetView> Authors { get; set; }

        public AuthorGetAllView()
        {
            Authors = new List<AuthorGetView>();
        }
    }
}