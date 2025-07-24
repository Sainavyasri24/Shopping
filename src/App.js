// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard'; // ✅ FIXED: Correct path

function App() {
  return (
    <div className="app d-flex">
      <Sidebar />
      <div className="content flex-grow-1 p-4">
        <Dashboard /> {/* ✅ Ensure this renders */}
      </div>
    </div>
  );
}

export default App;
