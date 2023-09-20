using BookStoreAPI.Persistence.DAL;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BookStoreAPI.Persistence.Repositories;
using BookStoreAPI.Application.Interfaces.Repository;

namespace BookStoreAPI.Persistence
{
    public static class ServiceRegistration
    {
        public static void PersistenceServiceRegister(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<AppDbContext>(options =>
                options.UseSqlServer(config.GetConnectionString("DefaultConnection"))
            );
            services.AddScoped<IAuthorRepository, AuthorRepository>();
            services.AddScoped<IBookRepository, BookRepository>();
            services.AddScoped<IGenreRepository, GenreRepository>();
            services.AddScoped<ILanguageRepository, LanguageRepository>();
            services.AddScoped<ISubscriberRepository, SubscriberRepository>();
        }
    }
}
