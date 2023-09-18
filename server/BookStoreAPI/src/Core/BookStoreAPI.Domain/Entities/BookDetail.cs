using BookStoreAPI.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Domain.Entities
{
    public class BookDetail : BaseEntity
    {
        public string Format { get; set; }
        public string Size { get; set; }
        public DateTime ReleaseDate { get; set; }
        public int PageCount { get; set; }
        public string Description { get; set; }
        public Guid BookId { get; set; }
        public Book Book { get; set; }
    }
}
