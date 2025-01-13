import React from 'react';
import { Card } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import '../css/ExpenseCard.css';

const ExpenseCard = ({ expense, handleDeleteExpense }) => {
  return (
    <Card className="expense-card">
      <Card.Body>
        <Card.Title>{expense.title}</Card.Title>
        <Card.Text>{expense.description}</Card.Text>
        <Card.Text className="text-end fw-bold">₹{expense.amount.toFixed(2)}</Card.Text>

        {/* Delete Icon */}
        <div
          className="delete-icon"
          onClick={() => handleDeleteExpense(expense.id)}
        >
          <FaTrashAlt size={20} color="red" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ExpenseCard;