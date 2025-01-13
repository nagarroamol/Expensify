import React, { useState, useEffect } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import AddExpenseModal from './AddExpenseModal';
import axiosInstance from '../Services/axiosInstance';
import ExpenseCard from './ExpenseCard';

const Expenses = ({ categories }) => {
  const [expenses, setExpenses] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axiosInstance.get('expenses');
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const handleAddExpense = async (newExpense) => {
    try {
      const response = await axiosInstance.post('expenses', newExpense);
      if (response.status === 200) {
        fetchExpenses();
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const validationErrors = error.response.data;
        alert('Please fix the following errors: ' + JSON.stringify(validationErrors));
      } else {
        console.error('Error adding expense:', error);
      }
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      await axiosInstance.delete(`expenses/${id}`);
      setExpenses(expenses.filter((expense) => expense.id !== id)); // Remove the deleted expense
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  return (
    <Container>
      <h2 className="my-4">Expenses</h2>
      <Button variant="primary" className="mb-4" onClick={() => setShowModal(true)}>
        Add Expense
      </Button>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {expenses.map((expense) => (
          <ExpenseCard
          expense={expense}
          handleDeleteExpense={handleDeleteExpense}
        />
        ))}
      </Row>
      <AddExpenseModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onAdd={handleAddExpense}
        categories={categories}
      />
    </Container>
  );
};

export default Expenses;