﻿using BookStoreAPI.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.Interfaces.Repository
{
    public interface IBookDetailRepository : IGenericRepositoryAsync<BookDetail>
    {
    }
}
