// src/pages/Dashboard.js
import React from 'react';
import './Dashboard.css';
import Topbar from '../components/Topbar';
import StatsCards from '../components/StatsCards';
import WeeklyUsersChart from '../components/WeeklyUsersChart';
import MonthlyProfitsChart from '../components/MonthlyProfits';
import RecentSales from '../components/RecentSales';
import RecentOrders from '../components/RecentOrders';

function Dashboard() {
  return (
    <div className="dashboard-container px-4 py-3">
      <Topbar />
      <div className="row mb-4">
        <StatsCards />
      </div>
      {/* Charts Section */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <WeeklyUsersChart />
        </div>
        <div className="col-md-6 mb-3">
          <MonthlyProfitsChart />
        </div>
      </div>
      {/* Tables Section */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <RecentSales />
        </div>
        <div className="col-md-6 mb-3">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
