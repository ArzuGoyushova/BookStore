using BookStoreAPI.Application.Features.Commands.BookCommands;
using BookStoreAPI.Application.Interfaces.Repository;
using BookStoreAPI.Application.Wrappers;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.Features.Commands.BookCommands
{
    public class DeleteBookCommand : IRequest<ServiceResponse<Guid>>
    {
        public Guid BookId { get; set; }
    }

    public class DeleteBookCommandHandler : IRequestHandler<DeleteBookCommand, ServiceResponse<Guid>>
    {
        private readonly IBookRepository _bookRepository;

        public DeleteBookCommandHandler(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        public async Task<ServiceResponse<Guid>> Handle(DeleteBookCommand request, CancellationToken cancellationToken)
        {
            var existingBook = await _bookRepository.GetItemByIdAsync(request.BookId);

            if (existingBook == null)
            {
                return null;
            }

            await _bookRepository.DeleteAsync(existingBook.Id);

            return new ServiceResponse<Guid>(existingBook.Id);
        }
    }

}