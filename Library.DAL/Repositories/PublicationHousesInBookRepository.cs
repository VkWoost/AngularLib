using Dapper;
using Library.DAL.Interfaces;
using Library.Entities.Enteties;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace Library.DAL.Repositories
{
	public class PublicationHousesInBookRepository : IPublicationHousesInBookRepository
	{
		private string _connectionString;

		public PublicationHousesInBookRepository(string conn)
		{
			_connectionString = conn;
		}	

		public IEnumerable<PublicationHousesInBook> GetAll()
		{
			string _sqlGetAll = "SELECT * FROM PublicationHouseBooks";

			using (var connection = new SqlConnection(_connectionString))
			{
				var result = connection.Query<PublicationHousesInBook>(_sqlGetAll);
				return result;
			}
		}

		public void Create(List<PublicationHousesInBook> items)
		{
			DataTable data = new DataTable();
			
			data.Columns.Add("BookId");
			data.Columns.Add("PublicationHouseId");

			foreach(var i in items){
				DataRow dr = data.NewRow();
				dr["BookId"] = i.BookId.ToString();
				dr["PublicationHouseId"] = i.PublicationHouseId.ToString();
				data.Rows.Add(dr);	
			}

			using (var connection = new SqlBulkCopy(_connectionString))
			{
				connection.DestinationTableName = "PublicationHouseBooks";
				connection.WriteToServer(data);
			}
		}

		public void DeleteByBookId(long id)
		{
			string _sqlDelete = $"DELETE FROM {typeof(PublicationHousesInBook).Name}s WHERE BookId = { id }";

			using (var connection = new SqlConnection(_connectionString))
			{
				connection.Execute(_sqlDelete, new { id });
			}
		}
	}
}
