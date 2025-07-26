import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';
import Customers from './pages/Customers';
import Products from './pages/Products';
import Transactions from './pages/Transactions';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';
  }, [theme]);

  return (
    <Router>
      <div className="d-flex">
        <Sidebar theme={theme} />
        <div className="flex-grow-1">
          <Topbar theme={theme} toggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
