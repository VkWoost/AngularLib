using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Library.Entities.Enteties
{
    public class PublicationHouseBook
    {
        [Key, Column(Order = 0)]
        public int BookId { get; set; }
        public Book Book { get; set; }

        [Key, Column(Order = 1)]
        public int PublicationHouseId { get; set; }
        public PublicationHouse PublicationHouse { get; set; }
    }
}