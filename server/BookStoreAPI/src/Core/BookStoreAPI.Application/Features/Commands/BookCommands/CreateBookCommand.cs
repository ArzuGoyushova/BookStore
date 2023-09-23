using AutoMapper;
using BookStoreAPI.Application.DTOs.Book;
using BookStoreAPI.Application.Interfaces.Repository;
using BookStoreAPI.Application.Profiles;
using BookStoreAPI.Application.Wrappers;
using BookStoreAPI.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.Features.Commands.BookCommands
{
    public class CreateBookCommand : IRequest<ServiceResponse<Guid>>
    {
        public BookCreateOrUpdateDTO BookDTO { get; set; }
    }

    public class CreateBookCommandHandler : IRequestHandler<CreateBookCommand, ServiceResponse<Guid>>
    {
        private readonly IBookRepository _bookRepository;
        private readonly IMapper _mapper;

        public CreateBookCommandHandler(IBookRepository bookRepository, IMapper mapper)
        {
            _bookRepository = bookRepository;
            _mapper = mapper;
        }

        public async Task<ServiceResponse<Guid>> Handle(CreateBookCommand request, CancellationToken cancellationToken)
        {
            var book = _mapper.Map<Book>(request.BookDTO);

            var pictures = MapProfile.MapPictures(request.BookDTO.NewPictures, "books");
            book.Pictures = pictures;

            if (book.Pictures.Count > 0)
            {
                book.Pictures[0].isMain = true;
            }

            await _bookRepository.CreateAsync(book);

            return new ServiceResponse<Guid>(book.Id);
        }

    }
}
