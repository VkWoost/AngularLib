using Library.Entities.Enteties;

namespace Library.DataAccess.Repositories
{
	public class PublicationHouseRepository : GenericRepository<PublicationHouse>
    {
		public PublicationHouseRepository(string connectionString)
		: base(connectionString) { }
    }
}
