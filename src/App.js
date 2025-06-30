import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import MainLayout from './Layout/MainLayout';
import Map from './Pages/Map';
import Pharmacydetails from './Pages/Pharmacydetails';
import OrderForm from './Pages/OrderForm';
import Payment from './Pages/Payment';
import MainLayout2 from './Layout/MainLayout2';
import RegisterPharmacy from './Pages/RegisterPharmacy';
import ViewOrder from './Pages/ViewOrder';
import Lists from './Pages/Lists';
import GenerateNumber from './Pages/GenerateNumber';
import RegisterPage from './Pages/RegisterPage';

function Path() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Login Page */}
          <Route path="/" element={<Login />} />
          <Route path="register" element={<RegisterPage/>}/>

          {/* Main Layout 1 (User) */}
          <Route path="main" element={<MainLayout />}>
            <Route path="map" element={<Map />} />
            <Route path="pharmacyDetails" element={<Pharmacydetails />} />
            <Route path="orderForm" element={<OrderForm />} />
            <Route path="payment" element={<Payment />} />
          </Route>

          {/* Main Layout 2 (Admin) */}
          <Route path="main/adminDashbord" element={<MainLayout2 />}>
            <Route path="RegisterPharmacy" element={<RegisterPharmacy />} />
            <Route path="ViewOrder" element={<ViewOrder />} />
            <Route path="Lists" element={<Lists />} />
            <Route path="GenerateNumber" element={<GenerateNumber />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Path;
