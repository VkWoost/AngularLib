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

		public IEnumerable<PublicationHouseBook> GetAll()
		{
			return _dbSet.ToList();
		}
		public void Create(List<PublicationHouseBook> item)
		{
			_dbSet.AddRange(item);
			_context.SaveChanges();
		}

		public void Delete(List<PublicationHouseBook> item)
		{
			_dbSet.RemoveRange(item);
			_context.SaveChanges();
		}
	}
}
