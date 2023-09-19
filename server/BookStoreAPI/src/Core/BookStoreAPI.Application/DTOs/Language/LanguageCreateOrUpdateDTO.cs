using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.DTOs.Language
{
    public class LanguageCreateOrUpdateDTO
    {
        public string Name { get; set; }
    }
    public class LanguageCreateOrUpdateDtoValidator : AbstractValidator<LanguageCreateOrUpdateDTO>
    {
        public LanguageCreateOrUpdateDtoValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("Please fill in the field.")
                .MaximumLength(50).WithMessage("Name can't be longer than 50 characters.");

        }
    }
}
