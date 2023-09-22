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
    public class DeleteLanguageCommand : IRequest<ServiceResponse<Guid>>
    {
        public Guid LanguageId { get; set; }
    }

    public class DeleteLanguageCommandHandler : IRequestHandler<DeleteLanguageCommand, ServiceResponse<Guid>>
    {
        private readonly ILanguageRepository _languageRepository;

        public DeleteLanguageCommandHandler(ILanguageRepository languageRepository)
        {
            _languageRepository = languageRepository;
        }

        public async Task<ServiceResponse<Guid>> Handle(DeleteLanguageCommand request, CancellationToken cancellationToken)
        {
            var existingLanguage = await _languageRepository.GetItemByIdAsync(request.LanguageId);

            if (existingLanguage == null)
            {
                return null;
            }

            await _languageRepository.DeleteAsync(existingLanguage.Id);

            return new ServiceResponse<Guid>(existingLanguage.Id);
        }
    }

}