using Library.DataAccess.Interfaces;
using Library.Entities.Entities;

namespace Library.DataAccess.Repositories
{
	public class BrochureRepository : GenericRepository<Brochure>, IBrochureRepository
	{
		public BrochureRepository(string connectionString)
		: base(connectionString) { }
    }
}
