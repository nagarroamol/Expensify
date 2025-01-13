import React, { useState } from 'react';
import axiosInstance from './axiosInstance';

const Expenses = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const handleAddExpense = async () => {
    if (selectedCategory && title && amount) {
      const newExpense = { category: selectedCategory, title, description, amount: parseFloat(amount) };
      try {
        const response = await axiosInstance.post('expenses', newExpense);
        if (response.status === 200) {
          setTitle('');
          setDescription('');
          setAmount(0);
          setSelectedCategory('');
        }
      } catch (error) {
        console.error('Error adding expense:', error);
      }
    } else {
      alert('Please fill all required fields');
    }
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <div className="mb-3">
        <label className="form-label">Category:</label>
        <select className="form-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>{cat.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Title:</label>
        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Description:</label>
        <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Amount:</label>
        <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default Expenses;