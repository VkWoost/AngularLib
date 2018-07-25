namespace Library.Entities.Entities
{
	public class Brochure : BaseEntity
    {
		public string Name { get; set; }
		public string TypeOfCover { get; set; }
        public int NumberOfPages { get; set; }
    }
}
