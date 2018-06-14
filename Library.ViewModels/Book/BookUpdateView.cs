﻿using Library.ViewModels.PublicationHouse;
using System.Collections.Generic;

namespace Library.ViewModels.Book
{
    public class BookUpdateView
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int YearOfPublication { get; set; }
        public int? AuthorId { get; set; }
		public List<int> PublicationHouseIds { get; set; }
    }
}
