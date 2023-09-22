using BookStoreAPI.Application.Features.Commands.LanguageCommands;
using BookStoreAPI.Application.Features.Queries.LanguageQueries;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LanguageController : ControllerBase
    {
        private readonly IMediator _mediator;
        public LanguageController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var query = new GetAllLanguagesQuery();
            var response = await _mediator.Send(query);
            return Ok(response.Value);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var query = new GetLanguageByIdQuery { Id = id };
            var response = await _mediator.Send(query);

            if (response.Value == null)
            {
                return NotFound();
            }

            return Ok(response.Value);
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateLanguageCommand command)
        {
            var response = await _mediator.Send(command);
            return Ok(response.Value);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, UpdateLanguageCommand command)
        {
            if (id != command.LanguageId)
            {
                return BadRequest();
            }

            var response = await _mediator.Send(command);
            return Ok(response.Value);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var command = new DeleteLanguageCommand { LanguageId = id };
            var response = await _mediator.Send(command);
            return Ok(response.Value);
        }
    }
}