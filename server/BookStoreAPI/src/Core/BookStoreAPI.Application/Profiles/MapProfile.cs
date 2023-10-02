using AutoMapper;
using BookStoreAPI.Application.DTOs.Author;
using BookStoreAPI.Application.DTOs.Book;
using BookStoreAPI.Application.DTOs.Genre;
using BookStoreAPI.Application.DTOs.Language;
using BookStoreAPI.Domain.Entities;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Application.Profiles
{
    public class MapProfile : Profile
    {
        public MapProfile() 
        {
            CreateMap<Genre, GenreCreateOrUpdateDTO>().ReverseMap();
            CreateMap<Genre, GenreViewDTO>().ReverseMap();

            CreateMap<Language, LanguageCreateOrUpdateDTO>().ReverseMap();
            CreateMap<Language, LanguageViewDTO>().ReverseMap();

            CreateMap<Author, AuthorCreateOrUpdateDTO>().ReverseMap();
            CreateMap<Author, AuthorViewDTO>()
                .ForMember(dest=>dest.Books, opt=>opt.MapFrom(src=>src.Books))
                .ReverseMap();

            CreateMap<Book, BookViewDTO>()
                .ForMember(dest => dest.ImageUrls, opt => opt.MapFrom(src => src.Pictures.Select(b => b.ImageUrl)))
                .ForMember(dest => dest.GenreIds, opt => opt.MapFrom(src => src.BookGenres.Select(b => b.GenreId)))
                .ForMember(dest => dest.BookDetail, opt => opt.MapFrom(src => src.BookDetail)).ReverseMap();
            
            CreateMap<BookDetail, BookDetailViewDTO>().ReverseMap();

            CreateMap<BookCreateOrUpdateDTO, Book>()
                .ForMember(dest=>dest.AuthorId, opt => opt.MapFrom(src=>src.AuthorId))
                .ForMember(dest => dest.BookGenres, opt => opt.Ignore())
                .AfterMap((src, dest) =>
                {
                    var existingColorIds = dest.BookGenres.Select(pc => pc.GenreId).ToList();
                    foreach (var gId in src.GenreIds)
                    {
                        if (!existingColorIds.Contains(gId))
                        {
                            dest.BookGenres.Add(new BookGenre { GenreId = gId });
                        }
                    }
                    dest.BookGenres.RemoveAll(pc => !src.GenreIds.Contains(pc.GenreId));
                }).ReverseMap();

        }
        public static List<Picture> MapPictures(List<IFormFile> formFiles, string imageType)
        {
            if (formFiles == null || formFiles.Count == 0)
            {
                return new List<Picture>();
            }

            List<Picture> pictures = new List<Picture>();
            string imagesFolderPath = Path.Combine("C:\\Users\\Администратор\\Desktop\\BookStore\\client\\public\\", "images", imageType);

            foreach (var formFile in formFiles)
            {
                string uniqueFileName = GetUniqueFileName(formFile.FileName);
                string uniqueFileNameWithExtension = uniqueFileName + Path.GetExtension(formFile.FileName);

                string filePath = Path.Combine(imagesFolderPath, uniqueFileNameWithExtension);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    formFile.CopyTo(stream);
                }

                var picture = new Picture
                {
                    ImageUrl = uniqueFileNameWithExtension
                };
                pictures.Add(picture);
            }
            return pictures;
        }


        public static string GetUniqueFileName(string fileName)
        {
            fileName = Path.GetFileName(fileName);
            return Path.GetFileNameWithoutExtension(fileName)
                + "_" + Guid.NewGuid().ToString().Substring(0, 8);
        }
    }
}
