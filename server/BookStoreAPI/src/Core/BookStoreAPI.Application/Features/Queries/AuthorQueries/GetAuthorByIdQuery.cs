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
    public class GetAuthorByIdQuery : IRequest<ServiceResponse<AuthorViewDTO>>
    {
        public Guid Id { get; set; }
        public class GetAuthorByIdQueryHandler : IRequestHandler<GetAuthorByIdQuery, ServiceResponse<AuthorViewDTO>>
        {
            private readonly IAuthorRepository _authorRepository;
            private readonly IMapper _mapper;
            public GetAuthorByIdQueryHandler(IAuthorRepository authorRepository, IMapper mapper)
            {
                _authorRepository = authorRepository;
                _mapper = mapper;
            }
            public async Task<ServiceResponse<AuthorViewDTO>> Handle(GetAuthorByIdQuery request, CancellationToken cancellationToken)
            {
                var author = await _authorRepository.GetItemByIdAsync(request.Id);

                var viewModel = _mapper.Map<AuthorViewDTO>(author);

                return new ServiceResponse<AuthorViewDTO>(viewModel);
            }
        }

    }
}