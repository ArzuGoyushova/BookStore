using AutoMapper;
using BookStoreAPI.Application.DTOs.Book;
using BookStoreAPI.Application.Interfaces.Repository;
using BookStoreAPI.Application.Wrappers;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.Features.Queries.BookQueries
{
    public class GetBookByIdQuery : IRequest<ServiceResponse<BookViewDTO>>
    {
        public Guid Id { get; set; }

        public class GetBookByIdQueryHandler : IRequestHandler<GetBookByIdQuery, ServiceResponse<BookViewDTO>>
        {
            private readonly IBookRepository _bookRepository;
            private readonly IMapper _mapper;
            public GetBookByIdQueryHandler(IBookRepository bookRepository, IMapper mapper)
            {
                _bookRepository = bookRepository;
                _mapper = mapper;
            }

            public async Task<ServiceResponse<BookViewDTO>> Handle(GetBookByIdQuery request, CancellationToken cancellationToken)
            {
                var book = await _bookRepository.GetItemByIdWithIncludesAsync(
                    request.Id,
                    p => p.Pictures,
                    p => p.BookGenres,
                    p => p.BookDetail
                    );

                var viewModel = _mapper.Map<BookViewDTO>(book);

                return new ServiceResponse<BookViewDTO>(viewModel);
            }
        }
    }
}