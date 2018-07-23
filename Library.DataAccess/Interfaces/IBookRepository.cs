using Library.Entities.Enteties;

namespace Library.DataAccess.Interfaces
{
	public interface IBookRepository
    {
		int CreateBook(Book item);
		void DeleteRangeByAuthorId(long id);
	}
}
