namespace BackendAPI.Models
{
	public class Book
	{
		public Guid Id { get; set; }
        public String Title { get; set; }
        public String Author { get; set; }
        public String ISBN { get; set; }
        public String PublicationDate { get; set; }
    }
}

