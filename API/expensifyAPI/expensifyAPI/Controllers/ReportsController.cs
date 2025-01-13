using ExpenseManagerApi.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace expensifyAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReportsController : ControllerBase
    {
        private readonly ExpenseManagerContext _context;

        public ReportsController(ExpenseManagerContext context)
        {
            _context = context;
        }

        [HttpGet("weekly")]
        public async Task<ActionResult> GetWeeklyReport()
        {
            var weeklyExpenses = await _context.Expenses
                .Where(e => EF.Functions.DateDiffDay(e.DateAdded, DateTime.Now) <= 7)
                .ToListAsync();
            return Ok(weeklyExpenses);
        }

        [HttpGet("monthly")]
        public async Task<ActionResult> GetMonthlyReport()
        {
            var monthlyExpenses = await _context.Expenses
                .Where(e => EF.Functions.DateDiffMonth(e.DateAdded, DateTime.Now) <= 1)
                .ToListAsync();
            return Ok(monthlyExpenses);
        }
    }
}
