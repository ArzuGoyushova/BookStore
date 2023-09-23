using BookStoreAPI.Application.Interfaces.Repository;
using BookStoreAPI.Application.Wrappers;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.Features.Commands.AuthorCommands
{
    public class DeleteAuthorCommand : IRequest<ServiceResponse<Guid>>
    {
        public Guid AuthorId { get; set; }
    }

    public class DeleteAuthorCommandHandler : IRequestHandler<DeleteAuthorCommand, ServiceResponse<Guid>>
    {
        private readonly IAuthorRepository _authorRepository;

        public DeleteAuthorCommandHandler(IAuthorRepository authorRepository)
        {
            _authorRepository = authorRepository;
        }

        public async Task<ServiceResponse<Guid>> Handle(DeleteAuthorCommand request, CancellationToken cancellationToken)
        {
            var existingAuthor = await _authorRepository.GetItemByIdAsync(request.AuthorId);

            if (existingAuthor == null)
            {
                return null;
            }

            await _authorRepository.DeleteAsync(existingAuthor.Id);

            return new ServiceResponse<Guid>(existingAuthor.Id);
        }
    }

}