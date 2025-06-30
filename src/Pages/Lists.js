import React, { useState } from 'react';
import './Lists.css';

function Lists() {
  const [medicines, setMedicines] = useState([
    { id: 1, name: 'Paracetamol', type: 'Tablet' },
    { id: 2, name: 'Amoxicillin', type: 'Capsule' },
    { id: 3, name: 'Ibuprofen', type: 'Tablet' },
  ]);
  const [newMedicine, setNewMedicine] = useState({ name: '', type: '' });
  const [editingId, setEditingId] = useState(null);

  const handleAdd = () => {
    if (!newMedicine.name || !newMedicine.type) return;
    const newEntry = {
      id: Date.now(),
      ...newMedicine,
    };
    setMedicines([...medicines, newEntry]);
    setNewMedicine({ name: '', type: '' });
  };

  const handleDelete = (id) => {
    setMedicines(medicines.filter((med) => med.id !== id));
  };

  const handleEdit = (id) => {
    const med = medicines.find((m) => m.id === id);
    setNewMedicine({ name: med.name, type: med.type });
    setEditingId(id);
  };

  const handleUpdate = () => {
    setMedicines(
      medicines.map((med) =>
        med.id === editingId ? { ...med, ...newMedicine } : med
      )
    );
    setEditingId(null);
    setNewMedicine({ name: '', type: '' });
  };

  return (
    <div className="medicine-container">
      <h2> List  Of Medicine</h2>
      <div className="input-row">
        <input
          type="text"
          placeholder="Medicine Name"
          value={newMedicine.name}
          onChange={(e) => setNewMedicine({ ...newMedicine, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Medicine Type"
          value={newMedicine.type}
          onChange={(e) => setNewMedicine({ ...newMedicine, type: e.target.value })}
        />
        {editingId ? (
          <button onClick={handleUpdate} className="edit-btn">Update</button>
        ) : (
          <button onClick={handleAdd} className="add-btn">Add</button>
        )}
      </div>
      <table className="medicine-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((med) => (
            <tr key={med.id}>
              <td>{med.name}</td>
              <td>{med.type}</td>
              <td>
                <button onClick={() => handleEdit(med.id)} className="edit-btn">Edit</button>
                <button onClick={() => handleDelete(med.id)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Lists;
