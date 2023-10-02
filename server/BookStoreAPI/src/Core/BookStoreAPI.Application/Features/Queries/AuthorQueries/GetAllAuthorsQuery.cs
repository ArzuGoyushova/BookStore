using AutoMapper;
using BookStoreAPI.Application.DTOs.Author;
using BookStoreAPI.Application.Features.Queries.AuthorQueries;
using BookStoreAPI.Application.Interfaces.Repository;
using BookStoreAPI.Application.Wrappers;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.Features.Queries.AuthorQueries
{
    public class GetAllAuthorsQuery : IRequest<ServiceResponse<List<AuthorViewDTO>>>
    {
        public class GetAllAuthorsQueryHandler : IRequestHandler<GetAllAuthorsQuery, ServiceResponse<List<AuthorViewDTO>>>
        {
            private readonly IAuthorRepository _authorRepository;
            private readonly IMapper _mapper;
            public GetAllAuthorsQueryHandler(IAuthorRepository authorRepository, IMapper mapper)
            {
                _authorRepository = authorRepository;
                _mapper = mapper;
            }
            public async Task<ServiceResponse<List<AuthorViewDTO>>> Handle(GetAllAuthorsQuery request, CancellationToken cancellationToken)
            {
                var authors = await _authorRepository.GetAllItemsWithIncludesAsync(
                   b => b.Books
                   );

                var viewModel = _mapper.Map<List<AuthorViewDTO>>(authors);

                return new ServiceResponse<List<AuthorViewDTO>>(viewModel);
            }
        }
    }
}