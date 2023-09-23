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
    public class GetAllBooksQuery : IRequest<ServiceResponse<List<BookViewDTO>>>
    {
        public class GetAllBooksQueryHandler : IRequestHandler<GetAllBooksQuery, ServiceResponse<List<BookViewDTO>>>
        {
            private readonly IBookRepository _bookRepository;
            private readonly IMapper _mapper;
            public GetAllBooksQueryHandler(IBookRepository bookRepository, IMapper mapper)
            {
                _bookRepository = bookRepository;
                _mapper = mapper;
            }
            public async Task<ServiceResponse<List<BookViewDTO>>> Handle(GetAllBooksQuery request, CancellationToken cancellationToken)
            {
                var books = await _bookRepository.GetAllItemsWithIncludesAsync(
                    b => b.Pictures,
                    b => b.BookGenres,
                    b => b.BookDetail
                    );

                var viewModel = _mapper.Map<List<BookViewDTO>>(books);

                return new ServiceResponse<List<BookViewDTO>>(viewModel);
            }
        }
    }
}