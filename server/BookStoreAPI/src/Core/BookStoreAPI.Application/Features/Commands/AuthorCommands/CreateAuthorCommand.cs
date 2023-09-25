using AutoMapper;
using BookStoreAPI.Application.DTOs.Author;
using BookStoreAPI.Application.Features.Commands.AuthorCommands;
using BookStoreAPI.Application.Interfaces.Repository;
using BookStoreAPI.Application.Profiles;
using BookStoreAPI.Application.Wrappers;
using BookStoreAPI.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.Features.Commands.AuthorCommands
{
    public class CreateAuthorCommand : IRequest<ServiceResponse<Guid>>
    {
        public AuthorCreateOrUpdateDTO AuthorDTO { get; set; }
    }

    public class CreateAuthorCommandHandler : IRequestHandler<CreateAuthorCommand, ServiceResponse<Guid>>
    {
        private readonly IAuthorRepository _authorRepository;
        private readonly IMapper _mapper;

        public CreateAuthorCommandHandler(IAuthorRepository authorRepository, IMapper mapper)
        {
            _authorRepository = authorRepository;
            _mapper = mapper;
        }

        public async Task<ServiceResponse<Guid>> Handle(CreateAuthorCommand request, CancellationToken cancellationToken)
        {
            var author = _mapper.Map<Author>(request.AuthorDTO);
            if (request.AuthorDTO.NewImage != null)
            {
                author.ImageUrl = ProcessImage(request.AuthorDTO.NewImage);
            }
            await _authorRepository.CreateAsync(author);

            return new ServiceResponse<Guid>(author.Id);
        }
        private string ProcessImage(IFormFile image)
        {
            var uniqueFileName = MapProfile.GetUniqueFileName(image.FileName);
            var uniqueFileNameWithExtension = uniqueFileName + Path.GetExtension(image.FileName);
            var imageUrl = uniqueFileNameWithExtension;

            string filePath = Path.Combine("C:\\Users\\Администратор\\Desktop\\BookStore\\client\\public\\images\\authors", uniqueFileNameWithExtension);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                image.CopyTo(stream);
            }

            return imageUrl;
        }

    }
}