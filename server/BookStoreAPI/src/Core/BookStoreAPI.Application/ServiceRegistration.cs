using Microsoft.Extensions.DependencyInjection;
using MediatR;
using FluentValidation.AspNetCore;
using System.Reflection;
using BookStoreAPI.Application.DTOs.Author;
using BookStoreAPI.Application.DTOs.Book;
using BookStoreAPI.Application.DTOs.Genre;
using BookStoreAPI.Application.DTOs.Language;

namespace BookStoreAPI.Application
{
    public static class ServiceRegistration
    {
        public static void ApplicationServiceRegister(this IServiceCollection services)
        {
            var assembly = Assembly.GetExecutingAssembly();
            services.AddAutoMapper(assembly);
            services.AddMediatR(assembly);

            services.AddControllers().AddFluentValidation(option =>
            {
                //option.RegisterValidatorsFromAssemblyContaining<LoginDtoValidator>();
                //option.RegisterValidatorsFromAssemblyContaining<RegisterDtoValidator>();
                option.RegisterValidatorsFromAssemblyContaining<AuthorCreateOrUpdateDtoValidator>();
                option.RegisterValidatorsFromAssemblyContaining<BookCreateOrUpdateDtoValidator>();
                option.RegisterValidatorsFromAssemblyContaining<GenreCreateOrUpdateDtoValidator>();
                option.RegisterValidatorsFromAssemblyContaining<LanguageCreateOrUpdateDtoValidator>();
            });
        }
    }
}
