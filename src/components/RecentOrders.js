import React from 'react';
import { Card, Table, Badge, Image } from 'react-bootstrap';

const recentOrders = [
  { name: 'Jessica', amount: '$199.52', status: 'Completed', date: '11 Sep 2022', avatar: 'https://i.pravatar.cc/40?img=7' },
  { name: 'Charlie', amount: '$25.50', status: 'Pending', date: '11 Sep 2022', avatar: 'https://i.pravatar.cc/40?img=8' },
];

function RecentOrders() {
  return (
    <Card className="mt-4 shadow-sm">
      <Card.Body>
        <Card.Title className="mb-3">Recent Orders</Card.Title>
        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>User</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, idx) => (
              <tr key={idx}>
                <td>
                  <div className="d-flex align-items-center">
                    <Image src={order.avatar} roundedCircle width={30} height={30} className="me-2" />
                    {order.name}
                  </div>
                </td>
                <td>{order.amount}</td>
                <td>
                  <Badge bg={order.status === 'Completed' ? 'success' : 'warning'}>
                    {order.status}
                  </Badge>
                </td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default RecentOrders;
