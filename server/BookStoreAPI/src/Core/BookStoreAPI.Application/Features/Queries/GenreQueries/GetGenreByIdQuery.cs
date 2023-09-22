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

namespace BookStoreAPI.Application.Features.Queries.GenreQueries
{
    public class GetGenreByIdQuery : IRequest<ServiceResponse<GenreViewDTO>>
    {
        public Guid Id { get; set; }
        public class GetGenreByIdQueryHandler : IRequestHandler<GetGenreByIdQuery, ServiceResponse<GenreViewDTO>>
        {
            private readonly IGenreRepository _genreRepository;
            private readonly IMapper _mapper;
            public GetGenreByIdQueryHandler(IGenreRepository genreRepository, IMapper mapper)
            {
                _genreRepository = genreRepository;
                _mapper = mapper;
            }
            public async Task<ServiceResponse<GenreViewDTO>> Handle(GetGenreByIdQuery request, CancellationToken cancellationToken)
            {
                var genre = await _genreRepository.GetItemByIdAsync(request.Id);

                var viewModel = _mapper.Map<GenreViewDTO>(genre);

                return new ServiceResponse<GenreViewDTO>(viewModel);
            }
        }

    }
}