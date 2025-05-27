import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import MainLayout from './Layout/MainLayout';
import Map from './Pages/Map';
import Medicine from './Pages/Medicine';
import Pharmacydetails from './Pages/Pharmacydetails';
import OrderForm from './Pages/OrderForm';
import Payment from './Pages/Payment';

function Path() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route path="main" element={<MainLayout />}>
            <Route path="map" element={<Map />} />
            <Route path="medicine" element={<Medicine />} />
            <Route path="pharmacyDetails"  element={<Pharmacydetails />} />
            <Route path="orderForm" element={<OrderForm />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Path;
