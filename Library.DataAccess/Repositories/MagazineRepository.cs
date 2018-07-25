using Library.DataAccess.Interfaces;
using Library.Entities.Entities;

namespace Library.DataAccess.Repositories
{
	public class MagazineRepository : GenericRepository<Magazine>, IMagazineRepository
	{
		public MagazineRepository(string connectionString)
		: base(connectionString) { }
    }
}