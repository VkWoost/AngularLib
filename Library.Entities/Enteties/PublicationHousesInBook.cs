using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Library.Entities.Enteties
{
    public class PublicationHousesInBook
    {
        [Key, Column(Order = 0)]
        public long BookId { get; set; }
		public Book Book { get; set; }

        [Key, Column(Order = 1)]
        public long PublicationHouseId { get; set; }
		public PublicationHouse PublicationHouse{ get; set; }

		public PublicationHousesInBook() { }

		public PublicationHousesInBook(long bookId, long publicHouseId){
			BookId = bookId;
			PublicationHouseId = publicHouseId;
		}
    }
}