using Dapper;
using Library.DataAccess.Interfaces;
using Library.Entities.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace Library.DataAccess.Repositories
{
	public class PublicationHousesInBookRepository : IPublicationHousesInBookRepository
	{
		private string _connectionString;
		private string _tableName = "PublicationHouseBooks";

		public PublicationHousesInBookRepository(string connectionString)
		{
			_connectionString = connectionString;
		}

		public IEnumerable<PublicationHousesInBook> GetAll()
		{
			string sqlGetAll = $"SELECT * FROM {_tableName}";

			using (var connection = new SqlConnection(_connectionString))
			{
				var result = connection.Query<PublicationHousesInBook>(sqlGetAll);
				return result;
			}
		}

		public void Create(List<PublicationHousesInBook> items)
		{
			string sqlInsert = $"INSERT INTO {_tableName} (BookId, PublicationHouseId) VALUES (@BookId, @PublicationHouseId)";

			using (var connection = new SqlConnection(_connectionString))
			{
				connection.Execute(sqlInsert, items);
			}
		}

		public void DeleteByBookId(long id)
		{
			string sqlDelete = $"DELETE FROM {_tableName} WHERE BookId = { id }";

			using (var connection = new SqlConnection(_connectionString))
			{
				connection.Execute(sqlDelete, new { id });
			}
		}
	}
}
