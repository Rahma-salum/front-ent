import React, { useState } from 'react';

function SearchMedicine() {
  const [searchQuery, setSearchQuery] = useState('');

  const medicines = [
    { name: 'Paracetamol', type: 'Tablet', location: 'Fuoni', availability: 'Available' },
    { name: 'Amoxicillin', type: 'Capsule', location: 'Kwerekwe', availability: 'Low Stock' },
    { name: 'Ibuprofen', type: 'Tablet', location: 'Kibweni', availability: 'Available' },
    { name: 'Cetirizine', type: 'Tablet', location: 'Kianga', availability: 'Out of Stock' },
    { name: 'Azithromycin', type: 'Syrup', location: 'Stone town', availability: 'Available' },
  ];

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Search Medicine</h2>
      <input
        type="text"
        placeholder="Search for medicine..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <table border="1" cellPadding="8" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Type</th>
            <th>Location</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {filteredMedicines.length > 0 ? (
            filteredMedicines.map((medicine, index) => (
              <tr key={index}>
                <td>{medicine.name}</td>
                <td>{medicine.type}</td>
                <td>{medicine.location}</td>
                <td>{medicine.availability}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No medicines found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SearchMedicine;
