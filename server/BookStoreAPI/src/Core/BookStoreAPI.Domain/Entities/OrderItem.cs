using BookStoreAPI.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Domain.Entities
{
    public class OrderItem : BaseEntity
    {
        public int BookId { get; set; }
        public Book Book { get; set; }
        public int Quantity { get; set; }
        public double UnitPrice { get; set; }
    }
}
