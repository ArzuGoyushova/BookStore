using BookStoreAPI.Application.DTOs.Author;
using BookStoreAPI.Application.DTOs.Genre;
using BookStoreAPI.Application.DTOs.Language;
using FluentValidation;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.DTOs.Book
{
    public class BookCreateOrUpdateDTO
    {
        public string? Title { get; set; }
        public double? OldPrice { get; set; }
        public double RegularPrice { get; set; }
        public int? Discount { get; set; }
        public int Count { get; set; }
        public Guid AuthorId { get; set; }
        public Guid LanguageId { get; set; }
        public List<Guid> GenreIds { get; set; }
        public List<IFormFile>? ExistingPictures { get; set; }
        public List<IFormFile>? NewPictures { get; set; }
        public BookDetailViewDTO BookDetail { get; set; }
    }
    public class BookCreateOrUpdateDtoValidator : AbstractValidator<BookCreateOrUpdateDTO>
    {
        public BookCreateOrUpdateDtoValidator()
        {
            RuleFor(x => x.Title)
                .NotEmpty()
                .WithMessage("Please fill in the field.");

            RuleFor(x => x.OldPrice)
                .GreaterThan(0)
                .When(x => x.OldPrice.HasValue)
                .WithMessage("OldPrice must be greater than 0.");

            RuleFor(x => x.RegularPrice)
                .NotEmpty()
                .GreaterThan(0)
                .WithMessage("Please fill in the field and ensure RegularPrice is greater than 0.");

            RuleFor(x => x.Discount)
                .NotEqual(0)
                .When(x => x.Discount.HasValue)
                .WithMessage("Discount must be between 1 and 100 (inclusive).");

            RuleFor(x => x.Count)
                .GreaterThan(0)
                .WithMessage("Count must be greater than 0.");

            RuleFor(x => x.AuthorId)
                .NotEmpty()
                .WithMessage("Please select an author.");

            RuleFor(x => x.LanguageId)
                .NotEmpty()
                .WithMessage("Please select a language.");

            RuleFor(x => x.GenreIds)
                .NotEmpty()
                .WithMessage("Please select at least one genre.");

        }
    }
}
