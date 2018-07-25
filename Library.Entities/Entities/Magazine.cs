namespace Library.Entities.Entities
{
	public class Magazine : BaseEntity
    {
		public string Name { get; set; }
		public int Number { get; set; }
        public int YearOfPublication { get; set; }
    }
}
