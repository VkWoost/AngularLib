using Library.Entities.Enteties;

namespace Library.DAL.Interfaces
{
	public interface IBookRepository : IGEnericRepository<Book>
    {
		int CreateBook(Book item);
		void DeleteRangeByAuthorId(long id);
	}
}
