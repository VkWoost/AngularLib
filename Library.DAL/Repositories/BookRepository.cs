using Dapper;
using Library.Entities.Enteties;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Reflection;

namespace Library.DAL.Repositories
{
	public class BookRepository : GenericRepository<Book>
    {
		private string _connectionString;
		
		public BookRepository(string conn)
		:base(conn)
		{
			_connectionString = conn;
		}

		public int CreateBook(Book item){
			string _sqlCreate = "INSERT INTO Books (AuthorId, YearOfPublication, Name) OUTPUT INSERTED.[Id] VALUES (@AuthorId, @YearOfPublication, @Name)";

			using (var connection = new SqlConnection(_connectionString))
			{
				var response = connection.QuerySingle<int>(_sqlCreate, item);
				return response;
			}
		}

		public void DeleteRangeByAuthorId(int id)
		{
			string _sqlDelete = $"DELETE FROM {typeof(Book).Name}s WHERE AuthorId = { id }";

			using (var connection = new SqlConnection(_connectionString))
			{
				connection.Execute(_sqlDelete, new { id });
			}
		}
	}
}
