//Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar text-white p-3" style={{ width: '250px', background: '#1f1f1f', minHeight: '100vh' }}>
      <div className="text-center mb-4">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="profile"
          className="rounded-circle mb-2"
          width="80"
          height="80"
        />
        <h6>Welcome Back,</h6>
        <h5>Hamza S. 👋</h5>
      </div>

      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link text-white">📊 Dashboard</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link text-white">📈 Statistics</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link text-white">⚙️ Settings</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link text-white">👥 Customers</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link text-white">✉️ Messages</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link text-white">📦 Products</a></li>
        <li className="nav-item"><a href="#" className="nav-link text-white">🔄 Transactions</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;