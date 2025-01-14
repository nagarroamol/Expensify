import React, { useState } from 'react';
 // Import the delete service
import { FaTrash } from 'react-icons/fa'; // Import a trash icon

const Categories = ({ categories, loading, error, onAddCategory, onDeleteCategory }) => {
  const [customCategory, setCustomCategory] = useState('');

  const handleAddCategory = async () => {
    if (customCategory && !categories.some((cat) => cat.name === customCategory)) {
      try {
        await onAddCategory(customCategory);
        setCustomCategory('');
      } catch (err) {
        console.log('Failed to add category');
      }
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await onDeleteCategory(id);
    } catch (err) {
      console.log('Failed to delete category');
    }
  };

  if (loading) {
    return <p>Loading categories...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Categories</h2>
      <div className="mb-3">
        <label className="form-label">New Category:</label>
        <input 
          type="text" 
          className="form-control" 
          value={customCategory} 
          onChange={(e) => setCustomCategory(e.target.value)} 
        />
        <button className="btn btn-secondary mt-2" onClick={handleAddCategory}>Add Category</button>
      </div>
      <ul className="list-group">
        {(categories || []).map((cat) => (
          <li key={cat.id} className="list-group-item d-flex justify-content-between align-items-center">
            {cat.name}
            <FaTrash 
              className="text-danger" 
              style={{ cursor: 'pointer' }} 
              onClick={() => handleDeleteCategory(cat.id)} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;