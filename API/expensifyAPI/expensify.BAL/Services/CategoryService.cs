using ExpenseManagerApi.Data;
using expensify.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Logging;
using System.Text.Json;

namespace expensify.BAL
{
    public class CategoryService : ICategoryService
    {
        const string cacheKey = "categories";

        private readonly IDistributedCache _cache;
        private readonly ILogger<CategoryService> _logger;
        private readonly TimeSpan _cacheDuration = TimeSpan.FromMinutes(10);
        private readonly ExpenseManagerContext _context;

        public CategoryService(IDistributedCache cache, ILogger<CategoryService> logger, ExpenseManagerContext context)
        {
            _cache = cache;
            _logger = logger;
            _context = context;
        }

        public async Task<IEnumerable<Category>> GetCategoriesAsync()
        {
           
            var cachedCategories = await _cache.GetStringAsync(cacheKey);

            if (!string.IsNullOrEmpty(cachedCategories))
            {
                _logger.LogInformation("Returning categories from cache.");
                return JsonSerializer.Deserialize<IEnumerable<Category>>(cachedCategories);
            }

            // Simulate fetching categories from a database
            var categories = await GetCategoriesFromDatabaseAsync();

            var cacheEntry = JsonSerializer.Serialize(categories);
            await _cache.SetStringAsync(cacheKey, cacheEntry, new DistributedCacheEntryOptions
            {
                AbsoluteExpirationRelativeToNow = _cacheDuration
            });

            _logger.LogInformation("Categories added to cache.");
            return categories;
        }

        public async Task<bool> InvlidateCategoriesCacheAsync()
        {
            await _cache.RemoveAsync(cacheKey);
            return true;
        }

        private async Task<IEnumerable<Category>> GetCategoriesFromDatabaseAsync()
        {
            return await _context.Categories.ToListAsync();
        }


    }
}
