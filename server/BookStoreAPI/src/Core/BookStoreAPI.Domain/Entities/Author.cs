using BookStoreAPI.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Domain.Entities
{
    public class Author : BaseEntity
    {
        public string? FullName { get; set; }
        public string ImageUrl { get; set; }
        public List<Book>? Books { get; set; }
    }
}
