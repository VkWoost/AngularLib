using Library.DataAccess.Interfaces;
using Library.Entities.Entities;

namespace Library.DataAccess.Repositories
{
	public class AuthorRepository : GenericRepository<Author>, IAuthorRepository
    {
		public AuthorRepository(string connectionString)
		: base(connectionString) { }
    }
}
