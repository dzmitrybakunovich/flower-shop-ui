import Products from "../components/Products";

import "../pages/styles/product_list.css";
import React from "react";

const ProductList = () => {
  return (
    <div className="list-container">
      <div className="filter-container">
        <div className="filter">
          <span className="filter-title">Filter Products:</span>
          <select className="filter-select">
            <option disabled selected>
              Category
            </option>
            <option>Outside plants</option>
            <option>Flowers</option>
            <option>Home plants</option>
          </select>
        </div>
        <div className="filter">
          <span className="filter-title">Sort Flowers:</span>
          <select className="filter-select">
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default ProductList;
