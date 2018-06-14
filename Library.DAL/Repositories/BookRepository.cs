using Library.Entities.Enteties;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Library.DAL.Repositories
{
	public class BookRepository : EFGenericRepository<Book>
    {
		private LibraryContext _context;
		private DbSet<Book> _dbSet;

		public BookRepository(LibraryContext context)
		:base(context)
		{
			this._context = context;
			_dbSet = context.Set<Book>();
		}

		public int CreateBook(Book item){
			base.Create(item);
			return _context.Entry(item).Entity.Id;
		}

		public void DeleteRange(List<Book> items){
			_dbSet.RemoveRange(items);
			_context.SaveChanges();
		}
	}
}
