using System.Collections.Generic;

namespace Library.DataAccess.Interfaces
{
    public interface IGEnericRepository<TEntity> where TEntity : class
    {
        void Create(TEntity item);
        TEntity Get(long id);
        IEnumerable<TEntity> GetAll();
        void Delete(long id);
        void Update(TEntity item);
    }
}
