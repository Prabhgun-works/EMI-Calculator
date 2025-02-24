import React from 'react';

import { calculateEMI } from '../util/EMI';

export default function Table({Input}) {
      const emiBreakdown = calculateEMI(Input);
      const totalInterestPaid = emiBreakdown.reduce((acc, curr) => acc + curr.interestComponent, 0);
      const totalAmountPaid = Input.principal + totalInterestPaid;
      const monthlyEMI = emiBreakdown[0]?.emi || 0;
  return (
    
    <table className='summary-table '>
          <thead>
            <tr>
              <th>Detail</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly EMI</td>
              <td>{monthlyEMI.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Total Interest Paid</td>
              <td>{totalInterestPaid.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Total Amount Paid</td>
              <td>{totalAmountPaid.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
)
}

