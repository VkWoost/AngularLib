using Dapper;
using Library.DataAccess.Interfaces;
using Library.Entities.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace Library.DataAccess.Repositories
{
	public class BookRepository : GenericRepository<Book>, IBookRepository
    {
		private string _connectionString;
		private string _tableName = "Books";
		
		public BookRepository(string connectionString)
		:base(connectionString)
		{
			_connectionString = connectionString;
		}

		public int CreateBook(Book item){
			item.CreationDate = DateTime.Now;
			string sqlCreate = $"INSERT INTO {_tableName} (AuthorId, CreationDate, YearOfPublication, Name) OUTPUT INSERTED.[Id] VALUES (@AuthorId, @CreationDate, @YearOfPublication, @Name)";

			using (var connection = new SqlConnection(_connectionString))
			{
				var response = connection.QuerySingle<int>(sqlCreate, item);
				return response;
			}
		}

		public override void Update(Book item)
		{
			item.CreationDate = DateTime.Now;
			string sqlUpdate = $"UPDATE {_tableName} SET Name = @Name, AuthorId = @AuthorId, YearOfPublication = @YearOfPublication, CreationDate = @CreationDate WHERE Id = @Id";

			using (var connection = new SqlConnection(_connectionString))
			{
				connection.Execute(sqlUpdate, item);
			}
		}

		public void DeleteRangeByAuthorId(long id)
		{
			string sqlDelete = $"DELETE FROM {_tableName} WHERE AuthorId = { id }";

			using (var connection = new SqlConnection(_connectionString))
			{
				connection.Execute(sqlDelete, new { id });
			}
		}

		public override IEnumerable<Book> GetAll()
		{
			string sqlGetAll = $"SELECT book.*, author.* FROM {_tableName} AS book INNER JOIN Authors AS author ON book.AuthorId = author.Id";

			using (var connection = new SqlConnection(_connectionString))
			{
				var result = connection.Query<Book, Author, Book>(
				sqlGetAll, 
				(book, author) =>
				{
					book.Author = author;
					return book;
				});

				return result;
			}
		}
	}
}
