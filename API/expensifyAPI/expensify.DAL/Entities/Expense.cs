using System.ComponentModel.DataAnnotations.Schema;

namespace expensify.DAL.Entities
{
    public class Expense
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal Amount { get; set; }
        public int CategoryId { get; set; }
        public DateTime DateAdded { get; set; }
        public Category Category { get; set; }
    }
}
