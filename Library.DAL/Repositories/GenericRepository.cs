using Library.DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.SqlClient;
using System.Reflection;
using Library.Entities.Enteties;
using Dapper;

namespace Library.DataAccess.Repositories
{
    public class GenericRepository<TEntity> : IGEnericRepository<TEntity> where TEntity : BaseEntity
    {
        private string _connectionString;

        public GenericRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public TEntity Get(long id)
        {
            string _sqlGet = $"SELECT * FROM {typeof(TEntity).Name}s WHERE Id = {id}";
			using (var connection = new SqlConnection(_connectionString))
			{
				var result = connection.Query<TEntity>(_sqlGet).FirstOrDefault();
				return result;
			}
		}

        public virtual IEnumerable<TEntity> GetAll()
        {
			string _sqlGetAll = $"SELECT * FROM {typeof(TEntity).Name}s";

			using (var connection = new SqlConnection(_connectionString))
			{
				var result = connection.Query<TEntity>(_sqlGetAll);
				return result;
			}
		}

        public virtual void Create(TEntity item)
        {
			item.CreationDate = DateTime.Now;
			
			List<string> columnsWithoutId = new List<string>(GetColumnsWithoutId());
			var stringOfColumns = string.Join(", ", columnsWithoutId);
            var stringOfParameters = string.Join(", ", columnsWithoutId.Select(e => "@" + e));
            string _sqlCreate = $"INSERT INTO {typeof(TEntity).Name}s ({stringOfColumns}) VALUES ({stringOfParameters})";

			using (var connection = new SqlConnection(_connectionString))
			{
				connection.Execute(_sqlCreate, item);
			}
		}

        public virtual void Update(TEntity item)
        {
			item.CreationDate = DateTime.Now;
			
			var stringOfColumns = string.Join(", ", GetColumnsWithoutId().Select(e => $"{e} = @{e}"));
            string _sqlUpdate = $"UPDATE {typeof(TEntity).Name}s SET {stringOfColumns} WHERE Id = @Id";

			using (var connection = new SqlConnection(_connectionString))
			{
				connection.Execute(_sqlUpdate, item);
			}
		}

        public void Delete(long id)
        {
            string _sqlDelete = $"DELETE FROM {typeof(TEntity).Name}s WHERE id = {id}";

			using (var connection = new SqlConnection(_connectionString))
			{
				connection.Execute(_sqlDelete, new { id });
			}
		}

        private IEnumerable<string> GetColumns()
        {
            return typeof(TEntity)
                    .GetProperties()
                    .Select(e => e.Name);
        }

		private IEnumerable<string> GetColumnsWithoutId()
        {
            return typeof(TEntity)
                    .GetProperties()
                    .Where(e => e.Name != "Id" && !e.PropertyType.GetTypeInfo().IsGenericType)
                    .Select(e => e.Name);
        }
    }
}
