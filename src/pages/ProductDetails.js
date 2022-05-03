import img from "../assets/draft.jpg";
import React from "react";

import "./styles/product_detail.css";

const ProductDetails = () => {
  return (
    <div className="container-product">
      <div className="container-product-wrapper">
        <div className="container-product-img">
          <img className="product-img" src={img} alt="img"/>
        </div>
        <div className="container-info">
          <h1 className="title">Product Title</h1>
          <p className="description">
            Product description
          </p>
          <span className="price">$ 20</span>
          <div className="contact">
            <button className="button">Contact seller</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
