using expensify.DAL.Entities;

namespace expensify.BAL
{
    public interface ICategoryService
    {
        Task<IEnumerable<Category>> GetCategoriesAsync();
        Task<bool> InvlidateCategoriesCacheAsync();
    }
}
