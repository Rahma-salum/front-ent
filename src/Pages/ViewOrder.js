import React from 'react';
import './ViewOrder.css';

const orders = [
  {
    id: 1,
    customer: 'Rahma Ali',
    medicine: 'Paracetamol',
    quantity: 2,
    pharmacy: 'Shamsuu',
    status: 'Pending',
  },
  {
    id: 2,
    customer: 'John Doe',
    medicine: 'Amoxicillin',
    quantity: 1,
    pharmacy: 'Universal',
    status: 'Delivered',
  },
  {
    id: 3,
    customer: 'Fatma Juma',
    medicine: 'Ibuprofen',
    quantity: 3,
    pharmacy: 'Afrah',
    status: 'In Progress',
  },
];

function ViewOrder() {
  return (
    <div className="order-container">
      <h2>View Orders</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Medicine</th>
            <th>Quantity</th>
            <th>Pharmacy</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.medicine}</td>
              <td>{order.quantity}</td>
              <td>{order.pharmacy}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewOrder;
