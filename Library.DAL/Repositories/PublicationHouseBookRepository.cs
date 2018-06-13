using Library.Entities.Enteties;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Library.DAL.Repositories
{
	public class PublicationHouseBookRepository
    {
		private LibraryContext _context;
		private DbSet<PublicationHouseBook> _dbSet;

		public PublicationHouseBookRepository(LibraryContext context){
			this._context = context;
			_dbSet = context.Set<PublicationHouseBook>();
		}	

		public IEnumerable<PublicationHouseBook> GetAll(int bookId)
		{
			//return _dbSet.AsNoTracking().AsEnumerable();
			return _dbSet.Where(x => x.BookId == bookId).ToList();
		}
		public IEnumerable<PublicationHouseBook> GetAll()
		{
			//return _dbSet.AsNoTracking().AsEnumerable();
			return _dbSet.ToList();
		}
		public void Create(PublicationHouseBook item)
		{
			_dbSet.Add(item);
			_context.SaveChanges();
		}

		public void Delete(int bookId)
		{
			PublicationHouseBook item = _dbSet.FirstOrDefault(x => x.BookId == bookId);
			_dbSet.Remove(item);
			_context.SaveChanges();
		}
	}
}
