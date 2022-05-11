import Products from "../components/Products";

import "../pages/styles/product_list.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {actionCreator} from "../store/actions";
import Product from "../components/Product";

const ProductList = () => {
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(null);

    useEffect(() => {
        axios.get(
          'http://127.0.0.1:8080/api/item',
          {
            params: {
              category: selectedCategory,
              order: selectedOrder
            }
          }
        ).then(response => {
            setData(response.data);
          }
        )
      }, [selectedCategory, selectedOrder]
    )

    useEffect(() => {
        axios.get(
          'http://127.0.0.1:8080/api/category'
        ).then(response => {
            setCategories(response.data);
          }
        )
      }, []
    )

    return (
      <div className="list-container">
        <div className="filter-container">
          <div className="filter">
            <span className="filter-title">Filter Products:</span>
            <select className="filter-select" onChange={(e) => setSelectedCategory(e.target.value)}>
              <option disabled selected>
                Category
              </option>
              {categories.map((item) => (<option value={item.ca_name}>{item.ca_name}</option>))}
            </select>
          </div>
          <div className="filter">
            <span className="filter-title">Sort Flowers:</span>
            <select className="filter-select" onChange={(e) => setSelectedOrder(e.target.value)}>>
              <option selected value={"date:asc"}>Newest (asc)</option>
              <option value={"date:desc"}>Newest (desc)</option>
              <option value={"price:asc"}>Price (asc)</option>
              <option value={"price:desc"}>Price (desc)</option>
            </select>
          </div>
        </div>
        {data && <Products itemsPerPage={10} products={data}/>}
      </div>
    );
  }
;

export default ProductList;
