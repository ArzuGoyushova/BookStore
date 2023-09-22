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
    public class GetAllGenresQuery : IRequest<ServiceResponse<List<GenreViewDTO>>>
    {
        public class GetAllGenresQueryHandler : IRequestHandler<GetAllGenresQuery, ServiceResponse<List<GenreViewDTO>>>
        {
            private readonly IGenreRepository _genreRepository;
            private readonly IMapper _mapper;
            public GetAllGenresQueryHandler(IGenreRepository genreRepository, IMapper mapper)
            {
                _genreRepository = genreRepository;
                _mapper = mapper;
            }
            public async Task<ServiceResponse<List<GenreViewDTO>>> Handle(GetAllGenresQuery request, CancellationToken cancellationToken)
            {
                var genres = await _genreRepository.GetAllItemsAsync();

                var viewModel = _mapper.Map<List<GenreViewDTO>>(genres);

                return new ServiceResponse<List<GenreViewDTO>>(viewModel);
            }
        }
    }
}