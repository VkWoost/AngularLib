using Library.Entities.Entities;

namespace Library.DataAccess.Interfaces
{
	public interface IBookRepository : IGenericRepository<Book>
    {
		int CreateBook(Book item);
		void DeleteRangeByAuthorId(long id);
	}
}
