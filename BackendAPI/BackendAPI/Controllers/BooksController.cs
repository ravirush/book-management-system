using BackendAPI.Data;
using BackendAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackendAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class BooksController : Controller
    {
        private readonly FullStackDbContext _fullStackDbContext;
        private readonly ILogger<WeatherForecastController> _logger;

        public BooksController(FullStackDbContext fullStackDbContext, ILogger<WeatherForecastController> logger)
        {
            _fullStackDbContext = fullStackDbContext;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBooks()
        {
            var books = await _fullStackDbContext.Books.ToListAsync();

            return Ok(books);
        }

        [HttpPost]
        public async Task<IActionResult> AddBook([FromBody] Book bookRequest)
        {
            bookRequest.Id = Guid.NewGuid();

            await _fullStackDbContext.Books.AddAsync(bookRequest);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(bookRequest);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetBook([FromRoute] Guid id)
        {
            var book =
                await _fullStackDbContext.Books.FirstOrDefaultAsync(x => x.Id == id);

            if (book == null)
            {
                return NotFound();
            }

            return Ok(book);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateBook([FromRoute] Guid id, Book updateBookRequest)
        {
            var book = await _fullStackDbContext.Books.FindAsync(id);

            if (book == null)
            {
                return NotFound();
            }

            book.Title = updateBookRequest.Title;
            book.Author = updateBookRequest.Author;
            book.ISBN = updateBookRequest.ISBN;
            book.PublicationDate = updateBookRequest.PublicationDate;

            await _fullStackDbContext.SaveChangesAsync();

            return Ok(book);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteBook([FromRoute] Guid id)
        {
            var book = await _fullStackDbContext.Books.FindAsync(id);

            if (book == null)
            {
                return NotFound();
            }

            _fullStackDbContext.Books.Remove(book);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(book);
        }
    }
}