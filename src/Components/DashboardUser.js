import { Link, Outlet } from "react-router-dom";
import "./DashUser.css";

function Dashboard() {
  return (
    <>
      <div className="header">
        <h1>ONLINE MEDICAL SHOPPING SYSTEM</h1>
      </div>

      <div className="dashboard-container">
        <div className="navigation">
          <nav>
            <h3>User Navigation</h3>
            <ul>
              <li><Link to="/main/medicine">Search medicine</Link></li>
              <li><Link to="/main/map">Map Location</Link></li>
              <li><Link to="pharmacyDetails">Pharmacy Details</Link></li>
              <li><Link to="orderForm">Order Form</Link></li>
              <li><Link to="payment">Payment</Link></li>
              <li><Link to="/">Logout</Link></li>
            </ul>
          </nav>
        </div>

        <div className="main">
          <Outlet />
        </div>
      </div>

      <div className="footer">
        <h4>ONLINE MEDICAL SHOPPING SYSTEM @2025</h4>
      </div>
    </>
  );
}

export default Dashboard;  
  