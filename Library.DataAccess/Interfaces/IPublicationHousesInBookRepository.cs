using Library.Entities.Enteties;
using System.Collections.Generic;

namespace Library.DataAccess.Interfaces
{
	public interface IPublicationHousesInBookRepository
    {
		IEnumerable<PublicationHousesInBook> GetAll();
		void Create(List<PublicationHousesInBook> items);
		void DeleteByBookId(long id);
	}
}
