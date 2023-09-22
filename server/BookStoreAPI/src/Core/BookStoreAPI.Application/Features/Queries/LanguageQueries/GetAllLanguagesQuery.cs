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

namespace BookStoreAPI.Application.Features.Queries.LanguageQueries
{
    public class GetAllLanguagesQuery : IRequest<ServiceResponse<List<LanguageViewDTO>>>
    {
        public class GetAllLanguagesQueryHandler : IRequestHandler<GetAllLanguagesQuery, ServiceResponse<List<LanguageViewDTO>>>
        {
            private readonly ILanguageRepository _languageRepository;
            private readonly IMapper _mapper;
            public GetAllLanguagesQueryHandler(ILanguageRepository languageRepository, IMapper mapper)
            {
                _languageRepository = languageRepository;
                _mapper = mapper;
            }
            public async Task<ServiceResponse<List<LanguageViewDTO>>> Handle(GetAllLanguagesQuery request, CancellationToken cancellationToken)
            {
                var languages = await _languageRepository.GetAllItemsAsync();

                var viewModel = _mapper.Map<List<LanguageViewDTO>>(languages);

                return new ServiceResponse<List<LanguageViewDTO>>(viewModel);
            }
        }
    }
}