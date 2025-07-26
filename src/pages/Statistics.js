import React from 'react';
import { Card, Row, Col, Table } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Statistics = () => {
  const storeData = [
    { store: 'Store A', profit: 12000, loss: 3000 },
    { store: 'Store B', profit: 18000, loss: 2000 },
    { store: 'Store C', profit: 15000, loss: 4000 },
  ];

  const chartData = {
    labels: storeData.map((d) => d.store),
    datasets: [
      {
        label: 'Profit',
        data: storeData.map((d) => d.profit),
        backgroundColor: '#4CAF50',
      },
      {
        label: 'Loss',
        data: storeData.map((d) => d.loss),
        backgroundColor: '#f44336',
      },
    ],
  };

  return (
    <div className="p-4">
      <h3 className="mb-4">Store Statistics</h3>

      <Row className="mb-4">
        <Col>
          <Card className="text-white bg-success p-3">
            <h5>Total Profit</h5>
            <h4>₹45,000</h4>
          </Card>
        </Col>
        <Col>
          <Card className="text-white bg-danger p-3">
            <h5>Total Loss</h5>
            <h4>₹9,000</h4>
          </Card>
        </Col>
      </Row>

      <Card className="mb-4 p-3">
        <h5>Store-wise Profit/Loss</h5>
        <Bar data={chartData} options={{ responsive: true }} />
      </Card>

      <Card className="p-3">
        <h5>Store Summary</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Store</th>
              <th>Profit (₹)</th>
              <th>Loss (₹)</th>
            </tr>
          </thead>
          <tbody>
            {storeData.map((item, index) => (
              <tr key={index}>
                <td>{item.store}</td>
                <td>{item.profit}</td>
                <td>{item.loss}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default Statistics;
