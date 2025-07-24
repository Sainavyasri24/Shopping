import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Card } from 'react-bootstrap';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Users',
      data: [12000, 34058, 28000, 19000, 25000, 33000, 15000],
      backgroundColor: [
        '#9e77ff', // purple
        '#000',    // black
        '#9e77ff',
        '#000',
        '#fcd34d', // yellow
        '#9e77ff',
        '#000'
      ],
      borderRadius: 5,
      barThickness: 30,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { callbacks: {
      label: (context) => `$${context.raw.toLocaleString()}`,
    }},
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (val) => `${val / 1000}K`,
      },
    },
  },
};

function WeeklyUsersChart() {
  return (
    <Card className="mt-4 shadow-sm">
      <Card.Body>
        <Card.Title>Users In The Last Week</Card.Title>
        <Bar data={data} options={options} />
      </Card.Body>
    </Card>
  );
}

export default WeeklyUsersChart;
