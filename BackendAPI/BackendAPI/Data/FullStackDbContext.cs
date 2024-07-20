using BackendAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BackendAPI.Data
{
    public class FullStackDbContext : DbContext
    {
        public FullStackDbContext(DbContextOptions<FullStackDbContext> options) : base(options)
        {
        }

        // Default constructor for design-time services
        public FullStackDbContext() { }

        public DbSet<Book> Books { get; set; }
    }
}

