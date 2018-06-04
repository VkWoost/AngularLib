using Library.Entities.Enteties;
using Microsoft.EntityFrameworkCore;

namespace Library.DAL
{
    public class LibraryContext : DbContext
    {
        public DbSet<Author> Authors { get; set; }
        public DbSet<Magazine> Magazines { get; set; }
        public DbSet<Brochure> Brochures { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<PublicationHouse> PublicationHouses { get; set; }
        public DbSet<PublicationHouseBook> PublicationHouseBooks { get; set; }

        public LibraryContext(DbContextOptions<LibraryContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PublicationHouseBook>()
                .HasKey(x => new { x.BookId, x.PublicationHouseId });
        }
    }
}
