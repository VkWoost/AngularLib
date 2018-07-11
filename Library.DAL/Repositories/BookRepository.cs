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
				connection.Open();
				return connection.QuerySingle<int>(_sqlCreate, item);
			}
		}

		public void DeleteRange(List<Book> items){
			foreach (var item in items)
			{
				string _sqlDelete = $"DELETE FROM {typeof(Book).Name}s WHERE Id = { item.Id }";

				using (var connection = new SqlConnection(_connectionString))
				{
					connection.Open();
					connection.Execute(_sqlDelete, new { item.Id });
				}
			}
		}
	}
}
