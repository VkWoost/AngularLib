using Library.Entities.Enteties;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Library.DAL
{
    public class LibraryContext : IdentityDbContext<ApplicationUser>
	{
        public DbSet<Author> Authors { get; set; }
        public DbSet<Magazine> Magazines { get; set; }
        public DbSet<Brochure> Brochures { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<PublicationHouse> PublicationHouses { get; set; }
        public DbSet<PublicationHousesInBook> PublicationHouseBooks { get; set; }

		public LibraryContext(DbContextOptions<LibraryContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
			base.OnModelCreating(modelBuilder);

			modelBuilder.Entity<PublicationHousesInBook>()
                .HasKey(x => new { x.BookId, x.PublicationHouseId });
        } 	
	}
}