using Dapper;
using Library.Entities.Enteties;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Reflection;

namespace Library.DAL.Repositories
{
	public class PublicationHouseBookRepository
    {
		private string _connectionString;

		public PublicationHouseBookRepository(string conn)
		{
			_connectionString = conn;
		}	

		public IEnumerable<PublicationHouseBook> GetAll()
		{
			string _sqlGetAll = "SELECT * FROM PublicationHouseBooks";

			using (var connection = new SqlConnection(_connectionString))
			{
				connection.Open();
				return connection.Query<PublicationHouseBook>(_sqlGetAll);
			}
		}
		public void Create(List<PublicationHouseBook> items)
		{
			foreach (var item in items)
			{
				string _sqlCreate = "INSERT INTO PublicationHouseBooks (BookId, PublicationHouseId) VALUES (@BookId, @PublicationHouseId)";

				using (var connection = new SqlConnection(_connectionString))
				{
					connection.Open();
					connection.Execute(_sqlCreate, item);
				}
			}
		}

		public void Delete(List<PublicationHouseBook> items)
		{
			foreach (var item in items)
			{
				string _sqlDelete = $"DELETE FROM {typeof(PublicationHouseBook).Name}s WHERE BookId = { item.BookId }";

				using (var connection = new SqlConnection(_connectionString))
				{
					connection.Open();
					connection.Execute(_sqlDelete, new { item.BookId });
				}
			}
		}
	}
}
