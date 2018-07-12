namespace Library.Entities.Enteties
{
    public class Book : BaseEntity
    {
		public string Name { get; set; }
		public long AuthorId { get; set; }
        public int YearOfPublication { get; set; }
    }
}
