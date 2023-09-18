using BookStoreAPI.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Domain.Entities
{
    public class Language : BaseEntity
    {
        public string Name { get; set; }
        public List<Book>? Books { get; set; }
    }
}
