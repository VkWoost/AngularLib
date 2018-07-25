namespace Library.Entities.Entities
{
	public class Book : BaseEntity
    {
		public string Name { get; set; }
		public long AuthorId { get; set; }
		public virtual Author Author{ get; set; }
        public int YearOfPublication { get; set; }
    }
}
