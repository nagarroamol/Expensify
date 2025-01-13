using ExpenseManagerApi.Data;
using expensify.BAL;
using expensify.DAL.Entities;
using Microsoft.AspNetCore.Mvc;

namespace expensifyAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly ExpenseManagerContext _context;
        private readonly ICategoryService _categoryService;

        public CategoriesController(ExpenseManagerContext context, ICategoryService categoryService)
        {
            _context = context;
            _categoryService = categoryService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            var categories = await _categoryService.GetCategoriesAsync();
            return Ok(categories);
        }

        [HttpPost]
        public async Task<ActionResult<Category>> AddCategory(Category category)
        {
            _context.Categories.Add(category);
            await _context.SaveChangesAsync();
            await _categoryService.InvlidateCategoriesCacheAsync();
            return CreatedAtAction(nameof(GetCategories), new { id = category.Id }, category);
        }
    }
}
