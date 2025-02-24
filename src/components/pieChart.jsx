import React from 'react';

import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import {calculateEMI} from '../util/EMI';

export default function VisualResult({input}){

  const emiBreakdown = calculateEMI(input);
  const totalInterestPaid = emiBreakdown.reduce((acc, curr) => acc + curr.interestComponent, 0);

  const COLORS = ["#60A5FA", "#FCD34D"];

  const pieData = [
    { name: 'Principal Amount', value: Math.round(input.principal) },
    { name: 'Total Interest', value: Math.round(totalInterestPaid) },
  ];
  return (

    <div className="pie-chart-container">
        <PieChart width={450} height={300}>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="blue"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
  )
}

