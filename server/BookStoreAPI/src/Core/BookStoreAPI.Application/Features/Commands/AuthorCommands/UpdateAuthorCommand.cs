using AutoMapper;
using BookStoreAPI.Application.DTOs.Author;
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
    public class UpdateAuthorCommand : IRequest<ServiceResponse<Guid>>
    {
        public Guid AuthorId { get; set; }
        public AuthorCreateOrUpdateDTO AuthorDTO { get; set; }
    }

    public class UpdateAuthorCommandHandler : IRequestHandler<UpdateAuthorCommand, ServiceResponse<Guid>>
    {
        private readonly IAuthorRepository _authorRepository;
        private readonly IMapper _mapper;

        public UpdateAuthorCommandHandler(IAuthorRepository authorRepository, IMapper mapper)
        {
            _authorRepository = authorRepository;
            _mapper = mapper;
        }

        public async Task<ServiceResponse<Guid>> Handle(UpdateAuthorCommand request, CancellationToken cancellationToken)
        {
            var existingAuthor = await _authorRepository.GetItemByIdAsync(request.AuthorId);

            if (existingAuthor == null)
            {
                return null;
            }

            _mapper.Map(request.AuthorDTO, existingAuthor);

            await _authorRepository.UpdateAsync(existingAuthor.Id, existingAuthor);

            return new ServiceResponse<Guid>(existingAuthor.Id);
        }
    }

}