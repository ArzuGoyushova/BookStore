using AutoMapper;
using BookStoreAPI.Application.DTOs.Language;
using BookStoreAPI.Application.Features.Queries.LanguageQueries;
using BookStoreAPI.Application.Interfaces.Repository;
using BookStoreAPI.Application.Wrappers;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.Features.Queries.LanguageQueries
{
    public class GetLanguageByIdQuery : IRequest<ServiceResponse<LanguageViewDTO>>
    {
        public Guid Id { get; set; }
        public class GetLanguageByIdQueryHandler : IRequestHandler<GetLanguageByIdQuery, ServiceResponse<LanguageViewDTO>>
        {
            private readonly ILanguageRepository _languageRepository; 
            private readonly IMapper _mapper;
            public GetLanguageByIdQueryHandler(ILanguageRepository languageRepository, IMapper mapper)
            {
                _languageRepository = languageRepository;
                _mapper = mapper;
            }
            public async Task<ServiceResponse<LanguageViewDTO>> Handle(GetLanguageByIdQuery request, CancellationToken cancellationToken)
            {
                var language = await _languageRepository.GetItemByIdAsync(request.Id);

                var viewModel = _mapper.Map<LanguageViewDTO>(language);

                return new ServiceResponse<LanguageViewDTO>(viewModel);
            }
        }

    }
}