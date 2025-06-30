import React from 'react';
import DataTable from 'react-data-table-component';
import './Pharmacydetails.css';

const pharmacyData = [
  { id: 1, name: 'SHAMSUU', street: 'STONE TOWN', latitude: -6.162013, longitude: 39.193179 },
  { id: 2, name: 'UNIVERSAL', street: 'STONE TOWN', latitude: -6.164321, longitude: 39.193842 },
  { id: 3, name: 'AFRAH', street: 'STONE TOWN', latitude: -6.164744, longitude: 39.195214 },
  { id: 4, name: 'MD', street: 'KWEREKWE', latitude: -6.175693, longitude: 39.227015 },
  { id: 5, name: 'UNGUJA PHARMACY', street: 'KWEREKWE', latitude: -6.17473, longitude: 39.223591 },
  { id: 6, name: 'HILMY', street: 'KWEREKWE', latitude: -6.17473, longitude: 39.223591 },
  { id: 7, name: 'AMINI', street: 'KWEREKWE', latitude: -6.175693, longitude: 39.227015 },
  { id: 8, name: 'IHSAAN', street: 'KWEREKWE', latitude: -6.17473, longitude: 39.223591 },
  { id: 9, name: 'LIFECARE', street: 'FUONI', latitude: -6.189607, longitude: 39.244157 },
  { id: 10, name: 'DUKA LA DAWA', street: 'KWEREKWE', latitude: -6.175693, longitude: 39.227015 },
  { id: 11, name: 'MKUBWA', street: 'MELI 5', latitude: -6.189706, longitude: 39.245883 },
  { id: 12, name: 'MAHAD V', street: 'FUONI', latitude: -6.189607, longitude: 39.244157 },
  { id: 13, name: 'MAHAD IV', street: 'MELI 4', latitude: -6.184628, longitude: 39.235377 },
  { id: 14, name: 'KWARARA', street: 'KWARARA', latitude: -6.198096, longitude: 39.24369 },
  { id: 15, name: 'MONASA', street: 'AMANI', latitude: -6.164133, longitude: 39.226812 },
  { id: 16, name: 'IKHLAS', street: 'KIBWENI', latitude: -6.109573, longitude: 39.215713 },
  { id: 17, name: 'SAH', street: 'KIBWENI', latitude: -6.109573, longitude: 39.215713 },
  { id: 18, name: 'HALAAL', street: 'REGEZAMWENDO', latitude: -6.140103, longitude: 39.253655 },
  { id: 19, name: 'HEXA', street: 'REGEZAMWENDO', latitude: -6.140103, longitude: 39.253655 },
  { id: 20, name: 'IBADA', street: 'REGEZAMWENDO', latitude: -6.140103, longitude: 39.253655 },
  { id: 21, name: 'KILIMAHEWA', street: 'KILIMAHEWA', latitude: -6.122269, longitude: 39.254818 },
  { id: 22, name: 'AFWA MED', street: 'KIANGA', latitude: -6.117858, longitude: 39.254243 },
  { id: 23, name: 'PHARMACY', street: 'KIANGA', latitude: -6.117858, longitude: 39.254243 },
  { id: 24, name: 'IBN SINA', street: 'KIANGA', latitude: -6.122269, longitude: 39.254818 },
  { id: 25, name: 'INSHIRAH', street: 'JUMBI', latitude: -6.194919, longitude: 39.302971 }
];


const columns = [
  {
    name: 'S/N',
    selector: (row, index) => index + 1,
    sortable: true,
    width: '70px'
  },
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true
  },
  {
    name: 'Street',
    selector: row => row.street,
    sortable: true
  },
  {
    name: 'Latitude',
    selector: row => row.latitude,
    sortable: true
  },
  {
    name: 'Longitude',
    selector: row => row.longitude,
    sortable: true
  }
];

// Handle row click
const handleRowClick = (row) => {
  alert(`Pharmacy: ${row.name}\nStreet: ${row.street}\nCoordinates: (${row.latitude}, ${row.longitude})`);
};

const Pharmacydetails = () => {
  return (
    <div className="pharmacy-container">
      <h1>Pharmacy Details</h1>
      <DataTable
        columns={columns}
        data={pharmacyData}
        pagination
        highlightOnHover
        striped
        responsive
        persistTableHead
        onRowClicked={handleRowClick}
      />
    </div>
  );
};

export default Pharmacydetails;
