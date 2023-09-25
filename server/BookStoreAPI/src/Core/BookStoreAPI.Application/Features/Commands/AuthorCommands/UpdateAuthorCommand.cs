using AutoMapper;
using BookStoreAPI.Application.DTOs.Author;
using BookStoreAPI.Application.Interfaces.Repository;
using BookStoreAPI.Application.Profiles;
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
            if (request.AuthorDTO.NewImage != null)
            {
                var uniqueFileName = MapProfile.GetUniqueFileName(request.AuthorDTO.NewImage.FileName);
                var uniqueFileNameWithExtension = uniqueFileName + Path.GetExtension(request.AuthorDTO.NewImage.FileName);

                existingAuthor.ImageUrl = uniqueFileNameWithExtension;

                string filePath = Path.Combine("C:\\Users\\Администратор\\Desktop\\BookStore\\client\\public\\images\\authors", uniqueFileNameWithExtension);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    request.AuthorDTO.NewImage.CopyTo(stream);
                }
            }
            _mapper.Map(request.AuthorDTO, existingAuthor);

            await _authorRepository.UpdateAsync(existingAuthor.Id, existingAuthor);

            return new ServiceResponse<Guid>(existingAuthor.Id);
        }
    }

}