// Data/ExpenseManagerContext.cs
using expensify.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace ExpenseManagerApi.Data
{
    public class ExpenseManagerContext : DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Expense> Expenses { get; set; }

        public ExpenseManagerContext(DbContextOptions<ExpenseManagerContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Seed initial categories
            modelBuilder.Entity<Category>().HasData(
                new Category { Id = 1, Name = "Food" },
                new Category { Id = 2, Name = "Travel" },
                new Category { Id = 3, Name = "Shopping" },
                new Category { Id = 4, Name = "Entertainment" },
                new Category { Id = 5, Name = "Investment" },
                new Category { Id = 6, Name = "EMI" },
                new Category { Id = 7, Name = "Bills" },
                new Category { Id = 8, Name = "Health" }
            );
        }
    }
}