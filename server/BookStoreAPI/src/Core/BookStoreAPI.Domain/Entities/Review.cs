using BookStoreAPI.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Domain.Entities
{
    public class Review : BaseEntity
    {
        public string Username { get; set; }
        public DateTime Date { get; set; }
        public string Comment { get; set; }
        public int Rate { get; set; }
        public Guid? BookId { get; set; }
        public Book? Book { get; set; }

        public Review()
        {
            Date = DateTime.Now;
        }
    }
}
