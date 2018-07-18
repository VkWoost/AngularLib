using Library.Entities.Enteties;

namespace Library.DataAccess.Repositories
{
	public class MagazineRepository : GenericRepository<Magazine>
    {
		public MagazineRepository(string connectionString)
		: base(connectionString) { }
    }
}
