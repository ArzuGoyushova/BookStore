using AutoMapper;
using BookStoreAPI.Application.DTOs.Genre;
using BookStoreAPI.Application.Interfaces.Repository;
using BookStoreAPI.Application.Wrappers;
using BookStoreAPI.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.Features.Commands.GenreCommands
{
    public class CreateGenreCommand : IRequest<ServiceResponse<Guid>>
    {
        public GenreCreateOrUpdateDTO GenreDTO { get; set; }
    }

    public class CreateGenreCommandHandler : IRequestHandler<CreateGenreCommand, ServiceResponse<Guid>>
    {
        private readonly IGenreRepository _genreRepository;
        private readonly IMapper _mapper;

        public CreateGenreCommandHandler(IGenreRepository genreRepository, IMapper mapper)
        {
            _genreRepository = genreRepository;
            _mapper = mapper;
        }

        public async Task<ServiceResponse<Guid>> Handle(CreateGenreCommand request, CancellationToken cancellationToken)
        {
            var genre = _mapper.Map<Genre>(request.GenreDTO);

            await _genreRepository.CreateAsync(genre);

            return new ServiceResponse<Guid>(genre.Id);
        }

    }
}