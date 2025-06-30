import { Link, Outlet } from "react-router-dom";
import "./DashAdmin.css";

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
              <li><Link to="/main/adminDashbord/RegisterPharmacy">RegisterPharmacy</Link></li>
              <li><Link to="Lists">Lists</Link></li>
              <li><Link to="ViewOrder">ViewOrder</Link></li>
              <li><Link to="GenerateNumber">GenerateNumber</Link></li>
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
  