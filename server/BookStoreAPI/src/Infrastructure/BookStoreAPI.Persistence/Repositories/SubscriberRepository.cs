using BookStoreAPI.Application.Interfaces.Repository;
using BookStoreAPI.Domain.Entities;
using BookStoreAPI.Persistence.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Persistence.Repositories
{
    public class SubscriberRepository : GenericRepository<Subscriber>, ISubscriberRepository
    {
        public SubscriberRepository(AppDbContext appDbContext) : base(appDbContext)
        {
        }
    }
}
