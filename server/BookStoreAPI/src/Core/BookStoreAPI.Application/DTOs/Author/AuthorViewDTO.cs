using BookStoreAPI.Application.DTOs.Book;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.DTOs.Author
{
    public class AuthorViewDTO
    {
        public Guid Id { get; set; }
        public string FullName { get; set; }
        public string ImageUrl { get; set; }
        public List<BookViewDTO>? Books { get; set; }
    }
}
