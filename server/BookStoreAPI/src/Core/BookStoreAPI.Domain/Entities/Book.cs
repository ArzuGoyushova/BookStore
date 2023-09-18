using BookStoreAPI.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Domain.Entities
{
    public class Book : BaseEntity
    {
        public string? Title { get; set; }
        public double? OldPrice { get; set; }
        public double RegularPrice { get; set; }
        public int Count { get; set; }
        public Guid AuthorId { get; set; }
        public Author? Author { get; set; }
        public Guid LanguageId { get; set; }
        public Language? Language { get; set; }
        public List<BookGenre> BookGenres { get; set; }
        public List<Picture> Pictures { get; set; }
        public BookDetail BookDetail { get; set; }
        public List<Review>? Reviews { get; set; }
        public Book()
        {
            Pictures = new();
            BookGenres = new();

        }
    }
}
