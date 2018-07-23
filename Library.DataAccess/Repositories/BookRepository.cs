using Dapper;
using Library.DataAccess.Interfaces;
using Library.Entities.Enteties;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace Library.DataAccess.Repositories
{
	public class BookRepository : GenericRepository<Book>, IBookRepository
    {
		private string _connectionString;
		
		public BookRepository(string connectionString)
		:base(connectionString)
		{
			_connectionString = connectionString;
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
			string _sqlDelete = $"DELETE FROM Books WHERE AuthorId = { id }";

			using (var connection = new SqlConnection(_connectionString))
			{
				connection.Execute(_sqlDelete, new { id });
			}
		}

		public override IEnumerable<Book> GetAll()
		{
			string _sqlGetAll = $"SELECT book.*, author.* FROM Books AS book INNER JOIN Authors AS author ON book.AuthorId = author.Id";

			using (var connection = new SqlConnection(_connectionString))
			{
				var result = connection.Query<Book, Author, Book>(
				_sqlGetAll, 
				(book, author) =>
				{
					book.Author = author;
					return book;
				}
				);
				return result;
			}
		}
	}
}
