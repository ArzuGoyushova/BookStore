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
            builder.Property(b => b.OldPrice).IsRequired(true).HasDefaultValue(60.0);
            builder.Property(b => b.RegularPrice).IsRequired(true).HasDefaultValue(46.0);
            builder.Property(b => b.OldPrice).HasColumnType("decimal(18,2)");
            builder.Property(b => b.RegularPrice).HasColumnType("decimal(18,2)");
            builder.Property(b => b.Discount)
            .HasComputedColumnSql("CAST((([RegularPrice] - [OldPrice]) / [OldPrice]) * 100 AS INT)");
            builder.Property(b => b.Count).IsRequired(true).HasDefaultValue(1);
        }
    }
}
