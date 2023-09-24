using BookStoreAPI.Application.Features.Commands.BookCommands;
using BookStoreAPI.Application.Features.Queries.BookQueries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IMediator _mediator;
        public BookController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var query = new GetAllBooksQuery();
            var response = await _mediator.Send(query);
            return Ok(response.Value);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var query = new GetBookByIdQuery { Id = id };
            var response = await _mediator.Send(query);

            if (response.Value == null)
            {
                return NotFound();
            }

            return Ok(response.Value);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromForm] CreateBookCommand command)
        {
            var response = await _mediator.Send(command);
            return Ok(response.Value);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, [FromForm] UpdateBookCommand command)
        {
            if (id != command.BookId)
            {
                return BadRequest();
            }

            var response = await _mediator.Send(command);
            return Ok(response.Value);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var command = new DeleteBookCommand { BookId = id };
            var response = await _mediator.Send(command);
            return Ok(response.Value);
        }
    }
}