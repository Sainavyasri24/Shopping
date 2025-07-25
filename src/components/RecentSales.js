import React from 'react';
import { Card, ListGroup, Image } from 'react-bootstrap';

const recentSales = [
  { name: 'Anna Soronio', amount: '+$68.00', time: '2 Minutes Ago', avatar: 'https://i.pravatar.cc/40?img=1' },
  { name: 'Afzal M.', amount: '+$100.00', time: '12 Minutes Ago', avatar: 'https://i.pravatar.cc/40?img=2' },
  { name: 'Charles', amount: '+$60.00', time: '18 Minutes Ago', avatar: 'https://i.pravatar.cc/40?img=3' },
  { name: 'Alex James', amount: '+$18.00', time: '6 Minutes Ago', avatar: 'https://i.pravatar.cc/40?img=4' },
  { name: 'Jessica', amount: '+$250.00', time: '1 Hour Ago', avatar: 'https://i.pravatar.cc/40?img=5' },
  { name: 'Sarah', amount: '+$60.00', time: '18 Minutes Ago', avatar: 'https://i.pravatar.cc/40?img=6' },
];

function RecentSales() {
  return (
    <Card className="mt-4 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Card.Title className="mb-0" style={{ fontSize: '1.5rem', background: '#E7D3BB', padding: '0.5rem 1rem', borderRadius: '8px', color: '#333' }}>Recent Sales</Card.Title>
          <a href="#" style={{ fontSize: '1.1rem' }}>See All</a>
        </div>
        <ListGroup variant="flush" style={{ background: '#E7D3BB', borderRadius: '8px', fontSize: '1.1rem' }}>
          {recentSales.map((sale, idx) => (
            <ListGroup.Item key={idx} className="d-flex align-items-center" style={{ background: '#E7D3BB', fontSize: '1.1rem', padding: '1.1rem 0' }}>
              <Image src={sale.avatar} roundedCircle width={50} height={50} className="me-3" />
              <div className="flex-grow-1">
                <strong>{sale.name}</strong><br />
                <small className="text-muted">{sale.time}</small>
              </div>
              <div><strong>{sale.amount}</strong></div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default RecentSales;
