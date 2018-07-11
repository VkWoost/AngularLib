using Dapper;
using Library.Entities.Enteties;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Data;
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
				var result = connection.Query<PublicationHouseBook>(_sqlGetAll);
				return result;
			}
		}

		public void Create(List<PublicationHouseBook> items)
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

		public void DeleteByBookId(int id)
		{
			string _sqlDelete = $"DELETE FROM {typeof(PublicationHouseBook).Name}s WHERE BookId = { id }";

			using (var connection = new SqlConnection(_connectionString))
			{
				connection.Execute(_sqlDelete, new { id });
			}
		}
	}
}
