using BookStoreAPI.Application.DTOs.Genre;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.DTOs.Author
{
    public class AuthorCreateOrUpdateDTO
    {
        public string FullName { get; set; }
    }
    public class AuthorCreateOrUpdateDtoValidator : AbstractValidator<AuthorCreateOrUpdateDTO>
    {
        public AuthorCreateOrUpdateDtoValidator()
        {
            RuleFor(x => x.FullName)
                .NotEmpty().WithMessage("Please fill in the field.")
                .MaximumLength(300).WithMessage("Name can't be longer than 300 characters.");
        }
    }
}