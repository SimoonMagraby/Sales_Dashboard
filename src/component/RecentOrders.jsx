// src/components/RecentOrders.jsx
import React from 'react';
import ordersData from '../data/ordersData';
import "../App.css"

const RecentOrders = () => {
  // Sort by newest orderDate
  const sortedOrders = [...ordersData].sort(
    (a, b) => new Date(b.orderDate) - new Date(a.orderDate)
  );

  // Optional: limit to last 5 orders
  const recentOrders = sortedOrders.slice(0, 5);

  return (
    <div className="rec-order">
      <h2 className="rec-order-title">Recent Orders</h2>
      <table className="table-rec-order">
        
        <tbody>
          {recentOrders.map((order) => (
            <tr key={order.orderId}>
              <td className="rec-table-content ">
                <img
                  src={order.productImage}
                  alt={order.name}
                  className="product-img"
                />
              </td>
              <td className="rec-table-content hide-on-mobile">{order.product}</td>
              <td className="rec-table-content" id="money">${order.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
