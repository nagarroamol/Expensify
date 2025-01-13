import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddExpenseModal = ({ show, onClose, onAdd, categories }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    if (selectedCategoryId && title && amount) {
      const expense = {
        title: title,
        description: description,
        amount: parseFloat(amount),
        categoryId: parseInt(selectedCategoryId)
    };
      
      // Call the API to add the expense
      onAdd(expense);
      
      // Clear the fields
      setSelectedCategoryId(0);
      setTitle('');
      setDescription('');
      setAmount('');
      onClose();
    } else {
      alert('Please fill all required fields');
    }
};

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategoryId(e.target.value)}
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add Expense
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddExpenseModal;