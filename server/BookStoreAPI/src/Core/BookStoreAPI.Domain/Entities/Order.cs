using BookStoreAPI.Domain.Common;
using BookStoreAPI.Domain.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Domain.Entities
{
    public class Order : BaseEntity
    {
        public string OrderNumber { get; set; }
        public List<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
        public DateTime OrderDate { get; set; }
        public double TotalPrice { get; set; }
        public PaymentStatus PaymentStatus { get; set; }
    }
}
