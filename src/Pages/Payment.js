import React, { useState } from 'react';
import './Payment.css';

function Payment() {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment Successful!');
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <label>
          Name on Card:
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            required
            maxLength="16"
            value={formData.cardNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="month"
            name="expiry"
            required
            value={formData.expiry}
            onChange={handleChange}
          />
        </label>
        <label>
          CVV:
          <input
            type="password"
            name="cvv"
            required
            maxLength="4"
            value={formData.cvv}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Pay Now</button>
      </form>
    </div>

  );
}

export default Payment;
