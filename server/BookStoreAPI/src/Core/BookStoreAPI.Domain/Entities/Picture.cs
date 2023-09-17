using BookStoreAPI.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Domain.Entities
{
    public class Picture : BaseEntity
    {
        public string ImageUrl { get; set; }
        public bool isMain { get; set; }
        public Guid? BookId { get; set; }
        public Book? Book { get; set; }
    }
}
