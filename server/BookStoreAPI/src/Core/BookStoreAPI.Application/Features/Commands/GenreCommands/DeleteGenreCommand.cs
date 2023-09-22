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
    public class DeleteGenreCommand : IRequest<ServiceResponse<Guid>>
    {
        public Guid GenreId { get; set; }
    }

    public class DeleteGenreCommandHandler : IRequestHandler<DeleteGenreCommand, ServiceResponse<Guid>>
    {
        private readonly IGenreRepository _genreRepository;

        public DeleteGenreCommandHandler(IGenreRepository genreRepository)
        {
            _genreRepository = genreRepository;
        }

        public async Task<ServiceResponse<Guid>> Handle(DeleteGenreCommand request, CancellationToken cancellationToken)
        {
            var existingGenre = await _genreRepository.GetItemByIdAsync(request.GenreId);

            if (existingGenre == null)
            {
                return null;
            }

            await _genreRepository.DeleteAsync(existingGenre.Id);

            return new ServiceResponse<Guid>(existingGenre.Id);
        }
    }

}