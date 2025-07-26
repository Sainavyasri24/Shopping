import React from 'react';
import { Card, Row, Col, Table } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Products = () => {
  const frequentOrders = [
    { name: 'Product A', orders: 120 },
    { name: 'Product B', orders: 95 },
    { name: 'Product C', orders: 85 },
  ];

  const leastOrders = [
    { name: 'Product X', orders: 5 },
    { name: 'Product Y', orders: 8 },
    { name: 'Product Z', orders: 12 },
  ];

  const chartData = {
    labels: [...frequentOrders.map(p => p.name), ...leastOrders.map(p => p.name)],
    datasets: [
      {
        label: 'Order Count',
        data: [...frequentOrders.map(p => p.orders), ...leastOrders.map(p => p.orders)],
        backgroundColor: ['#6f42c1', '#0d6efd', '#198754', '#ffc107', '#fd7e14', '#dc3545'],
      },
    ],
  };

  return (
    <div className="p-4">
      <h3 className="mb-4">Product Insights</h3>

      <Row className="mb-4">
        <Col>
          <Card className="p-3">
            <h5>Frequent Orders</h5>
            <Table striped>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Order Count</th>
                </tr>
              </thead>
              <tbody>
                {frequentOrders.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.orders}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>

        <Col>
          <Card className="p-3">
            <h5>Least Orders</h5>
            <Table striped>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Order Count</th>
                </tr>
              </thead>
              <tbody>
                {leastOrders.map((product, index) => (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.orders}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>

      <Card className="p-3">
        <h5>Product Order Distribution</h5>
        <Pie data={chartData} />
      </Card>
    </div>
  );
};

export default Products;
