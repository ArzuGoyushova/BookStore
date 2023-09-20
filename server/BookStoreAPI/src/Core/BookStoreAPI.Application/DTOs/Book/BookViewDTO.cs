using BookStoreAPI.Application.DTOs.Author;
using BookStoreAPI.Application.DTOs.Genre;
using BookStoreAPI.Application.DTOs.Language;
using BookStoreAPI.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.DTOs.Book
{
    public class BookViewDTO
    {
        public Guid Id { get; set; }
        public string? Title { get; set; }
        public double? OldPrice { get; set; }
        public double RegularPrice { get; set; }
        public int? Discount { get; set; }
        public int Count { get; set; }
        public AuthorViewDTO Author { get; set; }
        public LanguageViewDTO Language { get; set; }
        public List<GenreViewDTO> Genres { get; set; }
        public List<string> ImageUrls { get; set; }
        public BookDetailViewDTO BookDetail { get; set; }
    }


}
