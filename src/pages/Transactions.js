import React from 'react';
import { Card, Table } from 'react-bootstrap';

const Transactions = () => {
  const adminSalaries = [
    { store: 'Store A', admin: 'John Doe', salary: 45000 },
    { store: 'Store B', admin: 'Priya S.', salary: 50000 },
    { store: 'Store C', admin: 'Ahmed K.', salary: 42000 },
  ];

  const customerTransactions = [
    { name: 'Jessica', amount: 1200, date: '25 July 2025', status: 'Completed' },
    { name: 'Charlie', amount: 560, date: '24 July 2025', status: 'Pending' },
    { name: 'Afzal', amount: 720, date: '23 July 2025', status: 'Failed' },
  ];

  return (
    <div className="p-4">
    <h3 className="mb-4 section-heading highlight-heading">Transactions Overview</h3>
      <Card className="mb-4 p-3">
        <h5>Admin Salaries</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Store</th>
              <th>Admin Name</th>
              <th>Salary (₹)</th>
            </tr>
          </thead>
          <tbody>
            {adminSalaries.map((admin, index) => (
              <tr key={index}>
                <td>{admin.store}</td>
                <td>{admin.admin}</td>
                <td>₹{admin.salary.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      <Card className="p-3">
        <h5>Customer Transactions</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Amount (₹)</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {customerTransactions.map((tx, index) => (
              <tr key={index}>
                <td>{tx.name}</td>
                <td>₹{tx.amount}</td>
                <td>{tx.date}</td>
                <td>
                  <span
                    className={`badge ${
                      tx.status === 'Completed'
                        ? 'bg-success'
                        : tx.status === 'Pending'
                        ? 'bg-warning'
                        : 'bg-danger'
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default Transactions;
