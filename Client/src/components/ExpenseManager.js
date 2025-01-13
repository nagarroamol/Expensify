import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './Categories';
import Expenses from './Expenses';
import Reports from './Reports';
import { getCategories } from '../Services/categoryService';

const ExpenseManager = () => {
  const [categories, setCategories] = useState([]);
  const [reportType, setReportType] = useState('weekly');
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    // Fetch categories when the component mounts
    const fetchCategories = async () => {
      try {
        const data = await getCategories();  // Call the service function
        setCategories(data);  // Set the categories in state
      } catch (err) {
        setError('Failed to load categories');  // Set error state
      } finally {
        setLoading(false);  // Stop loading once the request is complete
      }
    };

    fetchCategories();
  }, []); // Empty dependency array means it runs only once on mount

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Expense Manager</h1>

      <div className="nav nav-tabs mb-4" id="myTab" role="tablist">
        <button className="nav-link active" id="add-expense-tab" data-bs-toggle="tab" data-bs-target="#add-expense" type="button" role="tab">Add Expense</button>
        <button className="nav-link" id="categories-tab" data-bs-toggle="tab" data-bs-target="#categories" type="button" role="tab">Categories</button>
        <button className="nav-link" id="reports-tab" data-bs-toggle="tab" data-bs-target="#reports" type="button" role="tab">Reports</button>
      </div>

      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="add-expense" role="tabpanel">
          <Expenses categories={categories} setCategories={setCategories} />
        </div>

        <div className="tab-pane fade" id="categories" role="tabpanel">
          <Categories categories={categories} loading={loading} error={error} setCategories={setCategories} />
        </div>

        <div className="tab-pane fade" id="reports" role="tabpanel">
          <Reports reportType={reportType} setReportType={setReportType} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseManager;