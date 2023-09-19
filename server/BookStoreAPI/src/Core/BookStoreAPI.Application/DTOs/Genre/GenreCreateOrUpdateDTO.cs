using BookStoreAPI.Application.DTOs.Language;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.DTOs.Genre
{
    public class GenreCreateOrUpdateDTO
    {
        public string Name { get; set; }
    }
    public class GenreCreateOrUpdateDtoValidator : AbstractValidator<GenreCreateOrUpdateDTO>
    {
        public GenreCreateOrUpdateDtoValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("Please fill in the field.")
                .MaximumLength(30).WithMessage("Name can't be longer than 30 characters.");

        }
    }
}
