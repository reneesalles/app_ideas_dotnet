using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.contexts;
using backend.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace backend.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class LibraryController : ControllerBase {
        private readonly ILogger<LibraryController> _logger;
        private readonly ApplicationDbContext _db;

        public LibraryController(ILogger<LibraryController> logger, ApplicationDbContext db)
        {
            _logger = logger;
            _db = db;
        }

        [HttpGet]
        public IEnumerable<Book> Get()
        {
            return _db.Book;
        }

        [HttpPost("Publisher")]
        public Publisher PostPublisher(Publisher model)
        {
            _db.Publisher.Add(model);
            _db.SaveChanges();
            return _db.Publisher.First((p) => p.ID == model.ID);
        }

        [HttpPost("Book")]
        public Book PostBook(Book model)
        {
            _db.Book.Add(model);
            _db.SaveChanges();
            return _db.Book.First((b) => b.ISBN == model.ISBN);
        }
    }
}