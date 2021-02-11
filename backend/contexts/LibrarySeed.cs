using System.Linq;
using backend.models;

namespace backend.contexts
{
    public static class LibrarySeed
    {
        public static void Seed(ApplicationDbContext _db)
        {
            _db.Database.EnsureCreated();
            
            if (_db.Publisher.Any((p) => p.Name == "Mariner Books"))
                return;
            
            // Adds a publisher
            var publisher = new Publisher
            {
                Name = "Mariner Books"
            };
            _db.Publisher.Add(publisher);

            // Adds some books
            _db.Book.Add(new Book
            {
                ISBN = "978-0544003415",
                Title = "The Lord of the Rings",
                Author = "J.R.R. Tolkien",
                Language = "English",
                Pages = 1216,
                Publisher = publisher
            });
            _db.Book.Add(new Book
            {
                ISBN = "978-0547247762",
                Title = "The Sealed Letter",
                Author = "Emma Donoghue",
                Language = "English",
                Pages = 416,
                Publisher = publisher
            });

            // Saves changes
            _db.SaveChanges();
        }
    }
}