using BookStoreAPI.Domain.Entities;
using BookStoreAPI.Domain.Helper;
using BookStoreAPI.Persistence.Configurations;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStoreAPI.Persistence.DAL
{
    public class AppDbContext : IdentityDbContext<AppUser>
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser> Users { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<BookDetail> BookDetails { get; set; }
        public DbSet<BookGenre> BookGenres { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Picture> Pictures { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Subscriber> Subscribers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new AuthorConfiguration());
            modelBuilder.ApplyConfiguration(new BookConfiguration());
            modelBuilder.ApplyConfiguration(new BookDetailConfiguration());
            modelBuilder.ApplyConfiguration(new GenreConfiguration());
            modelBuilder.ApplyConfiguration(new LanguageConfiguration());
            modelBuilder.ApplyConfiguration(new OrderConfiguration());


            base.OnModelCreating(modelBuilder);

            var roleIds = new Dictionary<RoleEnums, string>();

            foreach (var role in Enum.GetValues(typeof(RoleEnums)))
            {
                var roleName = role.ToString();
                var normalizedRoleName = roleName.ToUpperInvariant();
                var roleId = Guid.NewGuid().ToString();

                modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole { Id = roleId, Name = roleName, NormalizedName = normalizedRoleName });

                roleIds.Add((RoleEnums)role, roleId);
            }

            var adminUser = new AppUser
            {
                UserName = "admin",
                NormalizedUserName = "ADMIN",
                Email = "admin@gmail.com",
                NormalizedEmail = "ADMIN@GMAIL.COM",
                EmailConfirmed = true,
                FullName = "Admin",
                PhoneNumber = "+1234567890",
                PhoneNumberConfirmed = true,
                VerificationRequestId = "ver2"
            };

            var superAdminUser = new AppUser
            {
                UserName = "superadmin",
                NormalizedUserName = "SUPERADMIN",
                Email = "superadmin@gmail.com",
                NormalizedEmail = "SUPERADMIN@GMAIL.COM",
                EmailConfirmed = true,
                FullName = "Super Admin",
                PhoneNumber = "+0987654321",
                PhoneNumberConfirmed = true,
                VerificationRequestId = "ver1"
            };

            var salesManagerUser = new AppUser
            {
                UserName = "salesmanager",
                NormalizedUserName = "SALESMANAGER",
                Email = "salesmanager@gmail.com",
                NormalizedEmail = "SALESMANAGER@GMAIL.COM",
                EmailConfirmed = true,
                FullName = "Sales Manager",
                PhoneNumber = "+0987654323",
                PhoneNumberConfirmed = true,
                VerificationRequestId = "ver3"
            };

            var passwordHasher = new PasswordHasher<AppUser>();
            adminUser.PasswordHash = passwordHasher.HashPassword(adminUser, "12345@An");
            superAdminUser.PasswordHash = passwordHasher.HashPassword(superAdminUser, "12345@Sn");
            salesManagerUser.PasswordHash = passwordHasher.HashPassword(salesManagerUser, "12345@Sr");

            modelBuilder.Entity<AppUser>().HasData(adminUser);
            modelBuilder.Entity<AppUser>().HasData(superAdminUser);
            modelBuilder.Entity<AppUser>().HasData(salesManagerUser);

            var adminRoleId = roleIds[RoleEnums.Admin];
            var superAdminRoleId = roleIds[RoleEnums.SuperAdmin];
            var salesManagerRoleId = roleIds[RoleEnums.SalesManager];

            modelBuilder.Entity<IdentityUserRole<string>>().HasData(
                new IdentityUserRole<string> { RoleId = adminRoleId, UserId = adminUser.Id },
                new IdentityUserRole<string> { RoleId = superAdminRoleId, UserId = superAdminUser.Id },
                new IdentityUserRole<string> { RoleId = salesManagerRoleId, UserId = salesManagerUser.Id }
            );

        }
    }
}
