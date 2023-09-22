using AutoMapper;
using BookStoreAPI.Application.DTOs.Genre;
using BookStoreAPI.Application.Interfaces.Repository;
using BookStoreAPI.Application.Wrappers;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.Features.Commands.GenreCommands
{
    public class UpdateGenreCommand : IRequest<ServiceResponse<Guid>>
    {
        public Guid GenreId { get; set; }
        public GenreCreateOrUpdateDTO GenreDTO { get; set; }
    }

    public class UpdateGenreCommandHandler : IRequestHandler<UpdateGenreCommand, ServiceResponse<Guid>>
    {
        private readonly IGenreRepository _genreRepository;
        private readonly IMapper _mapper;

        public UpdateGenreCommandHandler(IGenreRepository genreRepository, IMapper mapper)
        {
            _genreRepository = genreRepository;
            _mapper = mapper;
        }

        public async Task<ServiceResponse<Guid>> Handle(UpdateGenreCommand request, CancellationToken cancellationToken)
        {
            var existingGenre = await _genreRepository.GetItemByIdAsync(request.GenreId);

            if (existingGenre == null)
            {
                return null;
            }

            _mapper.Map(request.GenreDTO, existingGenre);

            await _genreRepository.UpdateAsync(existingGenre.Id, existingGenre);

            return new ServiceResponse<Guid>(existingGenre.Id);
        }
    }

}