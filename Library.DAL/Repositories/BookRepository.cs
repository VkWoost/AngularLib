using Dapper;
using Library.DAL.Interfaces;
using Library.Entities.Enteties;
using Microsoft.EntityFrameworkCore;
using System;
using System.Data.SqlClient;

namespace Library.DAL.Repositories
{
	public class BookRepository : GenericRepository<Book>, IBookRepository
    {
		private string _connectionString;
		
		public BookRepository(string conn)
		:base(conn)
		{
			_connectionString = conn;
		}

		public int CreateBook(Book item){
			item.CreationDate = DateTime.Now;
			string _sqlCreate = "INSERT INTO Books (AuthorId, CreationDate, YearOfPublication, Name) OUTPUT INSERTED.[Id] VALUES (@AuthorId, @CreationDate, @YearOfPublication, @Name)";

			using (var connection = new SqlConnection(_connectionString))
			{
				var response = connection.QuerySingle<int>(_sqlCreate, item);
				return response;
			}
		}

		public void DeleteRangeByAuthorId(long id)
		{
			string _sqlDelete = $"DELETE FROM {typeof(Book).Name}s WHERE AuthorId = { id }";

			using (var connection = new SqlConnection(_connectionString))
			{
				connection.Execute(_sqlDelete, new { id });
			}
		}
	}
}
