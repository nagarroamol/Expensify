import axiosInstance from './axiosInstance';  // Import axiosInstance

// Function to fetch categories from the API
export const getCategories = async () => {
  try {
    const response = await axiosInstance.get('categories');  // Update the endpoint as needed
    return response.data;  // Return the categories data
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;  // Re-throw the error to be handled by the caller
  }
};

export const addCategory = async (categoryName) => {
  try {
    const response = await axiosInstance.post('categories', { name: categoryName });  // Assuming 'name' is the field in the API
    return response.data;  // Return the newly created category data
  } catch (error) {
    console.error('Error adding category:', error);
    throw error;  // Re-throw the error to be handled by the caller
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await axiosInstance.delete(`categories/${id}`);
    return response.data; 
  } catch (error) {
    console.error('Error deleting category:', error);
    throw error;
  }
};