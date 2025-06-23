
import React from "react";
import inventory from "../data/inventory";
import "../App.css"


const MostPopularItems = () => {
  
  const topItems = [...inventory]
    .sort((a, b) => b.soldUnits - a.soldUnits)
    .slice(0, 5);

  return (
    <div className="pop-product">
      <h2>Most Popular Items</h2>
      <table className="pop-product-table">
        <thead className="thead-bg">
          <tr className="">
            <th className="table-content">Images</th>
            <th className="table-content">Product</th>
            <th className="table-content">Category</th>
            <th className="table-content">Sold Units</th>
            <th className="table-content">Price</th>
            <th className="table-content">Status</th>
          </tr>
        </thead>
        <tbody>
          {topItems.map((item, index) => (
            <tr key={index} className="">
                
                <td className="table-content">
                <img
                  src={item.productImage}
                  alt={item.name}
                  className="product-img"
                />
              </td>
                <td className="table-content">{item.name}</td>
                <td className="table-content">{item.category}</td>
                <td className="table-content">{item.soldUnits}</td>
                <td className="table-content" id="money">${item.price}</td>
                <td className="table-content">{item.storage} unit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MostPopularItems;
