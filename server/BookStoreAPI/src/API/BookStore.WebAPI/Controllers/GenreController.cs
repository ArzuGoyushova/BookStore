﻿using BookStoreAPI.Application.Features.Commands.GenreCommands;
using BookStoreAPI.Application.Features.Queries.GenreQueries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenreController : ControllerBase
    {
        private readonly IMediator _mediator;
        public GenreController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var query = new GetAllGenresQuery();
            var response = await _mediator.Send(query);
            return Ok(response.Value);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(Guid id)
        {
            var query = new GetGenreByIdQuery { Id = id };
            var response = await _mediator.Send(query);

            if (response.Value == null)
            {
                return NotFound();
            }

            return Ok(response.Value);
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateGenreCommand command)
        {
            var response = await _mediator.Send(command);
            return Ok(response.Value);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, UpdateGenreCommand command)
        {
            if (id != command.GenreId)
            {
                return BadRequest();
            }

            var response = await _mediator.Send(command);
            return Ok(response.Value);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var command = new DeleteGenreCommand { GenreId = id };
            var response = await _mediator.Send(command);
            return Ok(response.Value);
        }
    }
}