import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const StatsCards = () => {
  const stats = [
    { title: 'Total Sales', value: '₹1,20,000' },
    { title: 'Orders', value: '350' },
    { title: 'Customers', value: '185' },
    { title: 'Profit', value: '₹28,000' },
  ];

  return (
    <Row className="mb-4">
      {stats.map((stat, idx) => (
        <Col md={3} sm={6} xs={12} key={idx} className="mb-3">
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title style={{ fontSize: '1.2rem' }}>{stat.title}</Card.Title>
              <h4 style={{ fontSize: '2rem', fontWeight: 700 }}>{stat.value}</h4>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default StatsCards;
