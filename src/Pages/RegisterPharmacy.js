import React, { useState } from 'react';
import './RegisterPharmacy.css';

function RegisterPharmacy() {
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    lat: '',
    lng: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Pharmacy Registered:', formData);
    alert('Pharmacy registered successfully!');

    setFormData({ name: '', street: '', lat: '', lng: '' });
  };

  return (
    <div className="register-container">
      <h2>Register New Pharmacy</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label>Pharmacy Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Street:</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Latitude:</label>
          <input
            type="text"
            name="lat"
            value={formData.lat}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Longitude:</label>
          <input
            type="text"
            name="lng"
            value={formData.lng}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
}

export default RegisterPharmacy;
