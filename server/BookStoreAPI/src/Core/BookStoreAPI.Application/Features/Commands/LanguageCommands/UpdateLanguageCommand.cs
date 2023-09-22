using AutoMapper;
using BookStoreAPI.Application.DTOs.Language;
using BookStoreAPI.Application.Interfaces.Repository;
using BookStoreAPI.Application.Wrappers;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.Features.Commands.LanguageCommands
{
    public class UpdateLanguageCommand : IRequest<ServiceResponse<Guid>>
    {
        public Guid LanguageId { get; set; }
        public LanguageCreateOrUpdateDTO LanguageDTO { get; set; }
    }

    public class UpdateLanguageCommandHandler : IRequestHandler<UpdateLanguageCommand, ServiceResponse<Guid>>
    {
        private readonly ILanguageRepository _languageRepository;
        private readonly IMapper _mapper;

        public UpdateLanguageCommandHandler(ILanguageRepository languageRepository, IMapper mapper)
        {
            _languageRepository = languageRepository;
            _mapper = mapper;
        }

        public async Task<ServiceResponse<Guid>> Handle(UpdateLanguageCommand request, CancellationToken cancellationToken)
        {
            var existingLanguage = await _languageRepository.GetItemByIdAsync(request.LanguageId);

            if (existingLanguage == null)
            {
                return null;
            }

            _mapper.Map(request.LanguageDTO, existingLanguage);

            await _languageRepository.UpdateAsync(existingLanguage.Id, existingLanguage);

            return new ServiceResponse<Guid>(existingLanguage.Id);
        }
    }

}