using Library.DataAccess.Interfaces;
using Library.Entities.Entities;

namespace Library.DataAccess.Repositories
{
	public class PublicationHouseRepository : GenericRepository<PublicationHouse>, IPublicationHouseRepository
	{
		public PublicationHouseRepository(string connectionString)
		: base(connectionString) { }
    }
}
