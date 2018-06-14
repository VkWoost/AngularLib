using Library.DAL.Interfaces;
using Library.Entities.Enteties;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Library.DAL.Repositories
{
    public class EFGenericRepository<TEntity> : IRepository<TEntity> where TEntity : BaseEntity
    {
        private LibraryContext _context;
        private DbSet<TEntity> _dbSet;

        public EFGenericRepository(LibraryContext context)
        {
            this._context = context;
            _dbSet = context.Set<TEntity>();
        }

		public TEntity Get(int id)
		{
			return _dbSet.AsNoTracking().FirstOrDefault(x => x.Id == id);
		}

		public virtual IEnumerable<TEntity> GetAll()
        {
            return _dbSet.AsNoTracking().AsEnumerable();
        }

        public virtual void Create(TEntity item)
        {
            _dbSet.Add(item);
            _context.SaveChanges();
        }

        public virtual void Update(TEntity item)
        {
            _context.Entry(item).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            TEntity item = Get(id);
            _dbSet.Remove(item);
            _context.SaveChanges();
        }
    }
}
