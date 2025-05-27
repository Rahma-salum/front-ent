
import React from 'react';
import './Pharmacydetails.css';

const pharmacyData = [
  { id: 1, name: 'SHAMSUU', street: 'STONETOWN', latitude: -6.162013, longitude: 39.193179 },
  { id: 2, name: 'UNIVERSAL', street: 'STONETOWN', latitude: -6.164321, longitude: 39.193842 },
  { id: 3, name: 'AFRAH', street: 'STONETOWN', latitude: -6.164744, longitude: 39.195214 },
  { id: 4, name: 'MD', street: 'KWEREKWE', latitude: -6.175693, longitude: 39.227015 },
  { id: 5, name: 'UNGUJA PHARMACY', street: 'KWEREKWE', latitude: -6.17473, longitude: 39.223591 },
  { id: 6, name: 'HILMY', street: 'KWEREKWE', latitude: -6.17473, longitude: 39.223591 },
  { id: 7, name: 'AMINI', street: 'KWEREKWE', latitude: -6.175693, longitude: 39.227015 },
  { id: 8, name: 'IHSAAN', street: 'KWEREKWE', latitude: -6.17473, longitude: 39.223591 },
  { id: 9, name: 'DUKA LA DAWA', street: 'KWEREKWE', latitude: -6.175693, longitude: 39.227015 },
  { id: 10, name: 'LIFE CARE', street: 'FUONI', latitude: -6.189607, longitude: 39.244157 },
  { id: 11, name: 'MKUBWA', street: 'FUONI MELI 5', latitude: -6.189706, longitude: 39.245883 },
  { id: 12, name: 'MAHAD', street: 'FUONI', latitude: -6.189607, longitude: 39.244157 },
  { id: 13, name: 'MAHAD 4', street: 'FUONI MELI 4', latitude: -6.184628, longitude: 39.235377 },
  { id: 14, name: 'KWARARA', street: 'KWARARA', latitude: -6.198096, longitude: 39.24369 },
  { id: 15, name: 'MONASA', street: 'AMANI', latitude: -6.164133, longitude: 39.226812 },
  { id: 16, name: 'IKHLAS', street: 'KIBWENI', latitude: -6.109573, longitude: 39.215713 },
  { id: 17, name: 'SAH 11', street: 'KIBWENI', latitude: -6.109573, longitude: 39.215713 },
  { id: 18, name: 'HALAAL', street: 'REGEZAMWENDO', latitude: -6.140103, longitude: 39.253655 },
  { id: 19, name: 'HEXA', street: 'REGEZAMWENDO', latitude: -6.140103, longitude: 39.253655 },
  { id: 20, name: 'IBADA', street: 'REGEZAMWENDO', latitude: -6.140103, longitude: 39.253655 },
  { id: 21, name: 'KILIMAHEWA', street: 'KIANGA', latitude: -6.122269, longitude: 39.254818 },
  { id: 22, name: 'AFWAMED', street: 'KIANGA', latitude: -6.117858, longitude: 39.254243 },
  { id: 23, name: 'PHARMACY', street: 'KIANGA', latitude: -6.117858, longitude: 39.254243 },
  { id: 24, name: 'IBN SINA', street: 'KIANGA', latitude: -6.122269, longitude: 39.254818 },
  { id: 25, name: 'INSHIRAH', street: 'JUMBI', latitude: -6.194919, longitude: 39.302971 }
];

const Pharmacydetails = () => {
  return (
    <div className="pharmacy-container">
      <h1>Pharmacy Details</h1>
      <table className="pharmacy-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Street</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {pharmacyData.map((pharmacy, index) => (
            <tr key={pharmacy.id}>
              <td>{index + 1}</td>
              <td>{pharmacy.name}</td>
              <td>{pharmacy.street}</td>
              <td>{pharmacy.latitude}</td>
              <td>{pharmacy.longitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pharmacydetails;
