using AutoMapper;
using BookStoreAPI.Application.DTOs.Book;
using BookStoreAPI.Application.Interfaces.Repository;
using BookStoreAPI.Application.Profiles;
using BookStoreAPI.Application.Wrappers;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.Features.Commands.BookCommands
{
    public class UpdateBookCommand : IRequest<ServiceResponse<Guid>>
    {
        public Guid BookId { get; set; }
        public BookCreateOrUpdateDTO BookDTO { get; set; }
    }

    public class UpdateBookCommandHandler : IRequestHandler<UpdateBookCommand, ServiceResponse<Guid>>
    {
        private readonly IBookRepository _bookRepository;
        private readonly IMapper _mapper;

        public UpdateBookCommandHandler(IBookRepository bookRepository, IMapper mapper)
        {
            _bookRepository = bookRepository;
            _mapper = mapper;
        }

        public async Task<ServiceResponse<Guid>> Handle(UpdateBookCommand request, CancellationToken cancellationToken)
        {
            var existingBook = await _bookRepository.GetItemByIdWithIncludesAsync(
               request.BookId,
               b => b.BookDetail,
               b => b.BookGenres);

            if (existingBook == null)
            {
                return null;
            }

            var updatedPictures = MapProfile.MapPictures(request.BookDTO.NewPictures, "books");
            existingBook.Pictures.AddRange(updatedPictures);

            var hasMainPicture = existingBook.Pictures.Any(p => p.isMain);
            if (!hasMainPicture && existingBook.Pictures.Count > 0)
            {
                existingBook.Pictures[0].isMain = true;
            }

            _mapper.Map(request.BookDTO, existingBook);

            await _bookRepository.UpdateAsync(existingBook.Id, existingBook);

            return new ServiceResponse<Guid>(existingBook.Id);
        }
    }
}
