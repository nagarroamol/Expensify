using ExpenseManagerApi.Data;
using expensify.DAL.Entities;
using expensifyAPI.Requests;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace expensifyAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExpensesController : ControllerBase
    {
        private readonly ExpenseManagerContext _context;

        public ExpensesController(ExpenseManagerContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Expense>>> GetExpenses()
        {
            return await _context.Expenses.Include(e => e.Category).ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Expense>> AddExpense([FromBody] ExpenseRequest expense)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newExpense = new Expense()
                    {
                        CategoryId = expense.CategoryId,
                        Amount = expense.Amount,
                        Title = expense.Title,
                        Description = expense.Description,
                        DateAdded = DateTime.UtcNow,
                    };
                    _context.Expenses.Add(newExpense);
                    await _context.SaveChangesAsync();
                    return CreatedAtAction(nameof(GetExpenses), new { id = newExpense.Id }, expense);
                }
                else
                {
                    return BadRequest(ModelState);  // Returns validation errors
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExpense(int id)
        {
            var expense = await _context.Expenses.FindAsync(id);
            if (expense == null)
            {
                return NotFound();
            }

            _context.Expenses.Remove(expense);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
