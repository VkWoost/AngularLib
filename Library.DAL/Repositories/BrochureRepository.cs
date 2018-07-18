using Library.Entities.Enteties;

namespace Library.DataAccess.Repositories
{
	public class BrochureRepository : GenericRepository<Brochure>
    {
		public BrochureRepository(string connectionString)
		: base(connectionString) { }
    }
}
