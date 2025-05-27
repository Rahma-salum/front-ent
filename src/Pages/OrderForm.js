import React, { useState } from 'react';
import './OrderForm.css';

function OrderForm() {
    const [formData, setFormData] = useState({
        customerName: '',
        phone: '',
        medicine: '',
        quantity: 1,
        pharmacy: '',
    });

    const pharmacies = [
        "SHAMSUU", "UNIVERSAL", "AFRAH", "MD", "UNGUJA PHARMACY", "HILMY",
        "AMINI", "IHSAAN", "DUKA LA DAWA", "LIFE CARE", "MKUBWA", "MAHAD",
        "MAHAD 4", "KWARARA", "MONASA", "IKHLAS", "SAH 11", "HALAAL", "HEXA",
        "IBADA", "KILIMAHEWA", "AFWAMED", "PHARMACY", "IBN SINA", "INSHIRAH"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Order Submitted:", formData);
        alert("Order submitted successfully!");
        setFormData({
            customerName: '',
            phone: '',
            medicine: '',
            quantity: 1,
            pharmacy: '',
        });
    };

    return (
        <div className="order-form-container">
            <h2>Place Your Order</h2>
            <form onSubmit={handleSubmit} className="order-form">
                <label>
                    Customer Name:
                    <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        required />
                </label>

                <label>
                    Phone Number:
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        required />
                </label>

                <label>
                    Medicine Name:
                    <input
                        type="text"
                        name="medicine"
                        value={formData.medicine}
                        onChange={handleChange}
                        required />
                </label>

                <label>
                    Quantity:
                    <input
                        type="number"
                        name="quantity"
                        min="1"
                        value={formData.quantity}
                        onChange={handleChange}
                        required />
                </label>

                <label>
                    Select Pharmacy:
                    <select
                        name="pharmacy"
                        value={formData.pharmacy}
                        onChange={handleChange}
                        required
                    >
                        <option value="">-- Choose --</option>
                        {pharmacies.map((pharmacy, idx) => (
                            <option key={idx} value={pharmacy}>{pharmacy}</option>
                        ))}
                    </select>
                </label>

                <button type="submit">Submit Order</button>
            </form>
        </div>
    );
}

export default OrderForm;
