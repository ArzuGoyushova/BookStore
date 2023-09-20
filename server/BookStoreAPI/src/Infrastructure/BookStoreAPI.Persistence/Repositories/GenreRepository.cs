﻿using BookStoreAPI.Application.Interfaces.Repository;
using BookStoreAPI.Domain.Entities;
using BookStoreAPI.Persistence.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Persistence.Repositories
{
    public class GenreRepository : GenericRepository<Genre>, IGenreRepository
    {
        public GenreRepository(AppDbContext appDbContext) : base(appDbContext)
        {
        }
    }
}