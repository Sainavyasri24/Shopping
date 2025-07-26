
//Sidebar.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ theme }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="sidebar text-white p-3" style={{ width: '250px', background: '#1f1f1f', minHeight: '100vh' }}>
      <div className="text-center mb-4">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="profile"
          className="rounded-circle mb-2"
          width="110"
          height="110"
        />
        <h6 style={{ fontSize: '1.3rem', fontWeight: 600 }}>Welcome Back,</h6>
        <h5 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Hamza S. 👋</h5>
      </div>

      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <div onClick={() => navigate('/')} className="nav-link text-white" style={{ cursor: 'pointer' }}>
            📊 Dashboard
          </div>
        </li>
        <li className="nav-item mb-2">
          <div onClick={() => navigate('/statistics')} className="nav-link text-white" style={{ cursor: 'pointer' }}>
            📈 Statistics
          </div>
        </li>
        <li className="nav-item mb-2">
          <div onClick={() => navigate('/settings')} className="nav-link text-white" style={{ cursor: 'pointer' }}>
            ⚙️ Settings
          </div>
        </li>
        <li className="nav-item mb-2">
          <div onClick={() => navigate('/customers')} className="nav-link text-white" style={{ cursor: 'pointer' }}>
            👥 Customers
          </div>
        </li>
        <li className="nav-item mb-2">
          <div onClick={() => navigate('/products')} className="nav-link text-white" style={{ cursor: 'pointer' }}>
            📦 Products
          </div>
        </li>
        <li className="nav-item">
          <div onClick={() => navigate('/transactions')} className="nav-link text-white" style={{ cursor: 'pointer' }}>
            <span style={{ fontSize: '1.1rem', verticalAlign: 'middle' }}>🔄</span>
            <span style={{ marginLeft: '8px', verticalAlign: 'middle' }}>Transactions</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
