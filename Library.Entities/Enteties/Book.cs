namespace Library.Entities.Enteties
{
    public class Book : BaseEntity
    {
        public int AuthorId { get; set; }
        public int YearOfPublication { get; set; }
    }
}
