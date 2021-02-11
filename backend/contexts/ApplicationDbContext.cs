using backend.models;
using Microsoft.EntityFrameworkCore;

namespace backend.contexts
{
    public class ApplicationDbContext : DbContext
    {

        public DbSet<Book> Book { get; set; }

        public DbSet<Publisher> Publisher { get; set; }

        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Publisher>(entity =>
            {
                entity.HasKey(e => e.ID);
                entity.Property(e => e.Name).IsRequired();
            });

            modelBuilder.Entity<Book>(entity =>
            {
                entity.HasKey(e => e.ISBN);
                entity.Property(e => e.Title).IsRequired();
                entity.HasOne(d => d.Publisher)
            .WithMany(p => p.Books);
            });
        }
    }
}