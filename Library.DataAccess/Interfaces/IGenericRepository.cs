using System.Collections.Generic;

namespace Library.DataAccess.Interfaces
{
	public interface IGenericRepository<TEntity>
    {
		TEntity Get(long id);
		IEnumerable<TEntity> GetAll();
		void Create(TEntity item);
		void Update(TEntity item);
		void Delete(long id);
	}
}
