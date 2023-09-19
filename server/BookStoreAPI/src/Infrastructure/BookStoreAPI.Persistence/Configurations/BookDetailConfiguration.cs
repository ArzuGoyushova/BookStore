using BookStoreAPI.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Persistence.Configurations
{
    public class BookDetailConfiguration : IEntityTypeConfiguration<BookDetail>
    {
        public void Configure(EntityTypeBuilder<BookDetail> builder)
        {
            builder.Property(b => b.Format).HasMaxLength(50).IsRequired();
            builder.Property(b => b.Size).HasMaxLength(50).IsRequired();
            builder.Property(b => b.ReleaseDate).IsRequired(true);
            builder.Property(b => b.PageCount).IsRequired(true);
            builder.Property(b => b.PageCount).HasDefaultValue(0);
            builder.Property(b => b.Description).IsRequired(true);
        }
    }
}
