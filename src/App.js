// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard'; // ✅ FIXED: Correct path
// import Topbar from './components/Topbar';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content p-4">
        <Dashboard /> {/* ✅ Ensure this renders */}
      </div>
    </div>
  );
}

export default App;
