// src/components/BusinessTable.jsx
import React from 'react';
import businessData from '../data/businessData';

const BusinessTable = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Monthly Business Data</h2>
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Month</th>
            <th className="border px-4 py-2">Sales</th>
            <th className="border px-4 py-2">Purchases</th>
            <th className="border px-4 py-2">Returns</th>
            <th className="border px-4 py-2">Marketing</th>
          </tr>
        </thead>
        <tbody>
          {businessData.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.month}</td>
              <td className="border px-4 py-2">${item.sales.toLocaleString()}</td>
              <td className="border px-4 py-2">${item.purchases.toLocaleString()}</td>
              <td className="border px-4 py-2">${item.returns.toLocaleString()}</td>
              <td className="border px-4 py-2">${item.marketing.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusinessTable;
