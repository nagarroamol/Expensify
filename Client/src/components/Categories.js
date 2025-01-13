import React, { useState } from 'react';
import { addCategory } from '../Services/categoryService';
 // Import the service

const Categories = ({ categories, loading, error }) => {
  const [customCategory, setCustomCategory] = useState('');

  const handleAddCategory = async () => {
    if (customCategory && !categories.includes(customCategory)) {
        try {
           await addCategory(customCategory);
        } catch (err) {
          console.log('Failed to add category');
        }
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
        {categories.map((cat) => (
          <li key={cat.id} className="list-group-item">{cat.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;