using Library.Entities.Enteties;

namespace Library.DataAccess.Repositories
{
	public class AuthorRepository : GenericRepository<Author>
    {
		public AuthorRepository(string connectionString)
		: base(connectionString) { }
    }
}
