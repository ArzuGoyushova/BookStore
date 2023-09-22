using AutoMapper;
using BookStoreAPI.Application.DTOs.Language;
using BookStoreAPI.Application.Interfaces.Repository;
using BookStoreAPI.Application.Wrappers;
using BookStoreAPI.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.Features.Commands.LanguageCommands
{
    public class CreateLanguageCommand : IRequest<ServiceResponse<Guid>>
    {
        public LanguageCreateOrUpdateDTO LanguageDTO { get; set; }
    }

    public class CreateLanguageCommandHandler : IRequestHandler<CreateLanguageCommand, ServiceResponse<Guid>>
    {
        private readonly ILanguageRepository _languageRepository;
        private readonly IMapper _mapper;

        public CreateLanguageCommandHandler(ILanguageRepository languageRepository, IMapper mapper)
        {
            _languageRepository = languageRepository;
            _mapper = mapper;
        }

        public async Task<ServiceResponse<Guid>> Handle(CreateLanguageCommand request, CancellationToken cancellationToken)
        {
            var language = _mapper.Map<Language>(request.LanguageDTO);

            await _languageRepository.CreateAsync(language);

            return new ServiceResponse<Guid>(language.Id);
        }

    }
}