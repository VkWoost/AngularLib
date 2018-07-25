﻿using Library.ViewModels.AuthorViewModels;
using Library.ViewModels.PublicationHouseViewModels;
using System.Collections.Generic;

namespace Library.ViewModels.BookViewModels
{
	public class GetBookListViewModel
    {
        public List<BookGetBookListViewModelItem> Books { get; set; }

        public GetBookListViewModel()
        {
            Books = new List<BookGetBookListViewModelItem>();
        }
    }

	public class BookGetBookListViewModelItem
	{
		public long Id { get; set; }
		public string Name { get; set; }
		public int YearOfPublication { get; set; }
		public long? AuthorId { get; set; }
		public GetAuthorViewModel Author { get; set; }
		public List<GetPublicationHouseViewModel> PublicationHouses { get; set; }
	}
}