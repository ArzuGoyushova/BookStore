using BookStoreAPI.Application.Features.Commands.AuthorCommands;
using BookStoreAPI.Application.Features.Queries.AuthorQueries;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        private readonly IMediator _mediator;
        public AuthorController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var query = new GetAllAuthorsQuery();
            var response = await _mediator.Send(query);
            return Ok(response.Value);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var query = new GetAuthorByIdQuery { Id = id };
            var response = await _mediator.Send(query);

            if (response.Value == null)
            {
                return NotFound();
            }

            return Ok(response.Value);
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateAuthorCommand command)
        {
            var response = await _mediator.Send(command);
            return Ok(response.Value);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, UpdateAuthorCommand command)
        {
            if (id != command.AuthorId)
            {
                return BadRequest();
            }

            var response = await _mediator.Send(command);
            return Ok(response.Value);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var command = new DeleteAuthorCommand { AuthorId = id };
            var response = await _mediator.Send(command);
            return Ok(response.Value);
        }
    }
}