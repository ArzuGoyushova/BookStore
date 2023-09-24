using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using BookStoreAPI.Domain.Entities;

namespace BookStoreAPI.Persistence.Configurations
{
    public class BookConfiguration : IEntityTypeConfiguration<Book>
    {
        public void Configure(EntityTypeBuilder<Book> builder)
        {
            builder.Property(b => b.OldPrice)
                .HasColumnType("decimal(18,2)")
                .HasDefaultValue(0.0);

            builder.Property(b => b.RegularPrice)
                .HasColumnType("decimal(18,2)")
                .IsRequired(true)
                .HasDefaultValue(0.0);

            builder.Property(b => b.Discount)
                .HasComputedColumnSql("CAST(((COALESCE([RegularPrice], 0) - COALESCE([OldPrice], 0)) / COALESCE(NULLIF([OldPrice], 0), 1)) * 100 AS INT)");

            builder.Property(b => b.Count)
                .IsRequired()
                .HasDefaultValue(1);
        }

    }
}
