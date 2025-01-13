import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ExpenseManager from './ExpenseManager';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExpenseManager />
  </React.StrictMode>
);