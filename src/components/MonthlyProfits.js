import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Card } from 'react-bootstrap';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Giveaway', 'Affiliate', 'Offline Sales'],
  datasets: [
    {
      label: 'Sales',
      data: [60, 24, 16],
      backgroundColor: [
        '#a78bfa', // light purple
        '#facc15', // yellow
        '#000000', // black
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#444',
        font: {
          size: 14,
        },
      },
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          return `${context.label}: ${context.raw}%`;
        },
      },
    },
  },
};

function MonthlyProfitsChart() {
  return (
    <Card className="mt-4 shadow-sm">
      <Card.Body>
        <div style={{ background: '#F49CC4', borderRadius: '8px', padding: '0.5rem 1rem', marginBottom: '1rem' }}>
          <Card.Title style={{ fontSize: '1.7rem', color: '#333', margin: 0 }}>Monthly Profits</Card.Title>
          <h5 className="mb-3" style={{ fontSize: '1.3rem', color: '#333', margin: 0 }}>Total Sales: 76,343</h5>
        </div>
        <div
  style={{
    height: '600px',
    width: '600px',
    display: 'flex',
    justifyContent: 'center',  // center horizontally
    alignItems: 'center',      // center vertically
    margin: '0 auto',          // center the wrapper in parent
  }}
>
  <Pie data={data} options={{ ...options, maintainAspectRatio: false }} />
</div>

      </Card.Body>
    </Card>
  );
}

export default MonthlyProfitsChart;
