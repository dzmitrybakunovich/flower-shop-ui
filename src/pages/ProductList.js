import Products from "../components/Products";

import "../pages/styles/product_list.css";
import React, {useState} from "react";
import axios from "axios";

const ProductList = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    axios.get(
        'http://127.0.0.1:8080/api/item'
    ).then(response => {
          if (response.status === 201) {
            getData();
          }
        }
    )
  }

  const [data, setDataStatus] = useState(false);

  const getData = () => {
    setDataStatus(!data);
  };

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
            <option selected>Newest (asc)</option>
            <option>Newest (desc)</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
        <form onSubmit={handleSubmit}>
          <button className="form-button" type="submit">LOGIN</button>
        </form>
      </div>
      <Products itemsPerPage={10} products={}/>
    </div>
  );
};

export default ProductList;
