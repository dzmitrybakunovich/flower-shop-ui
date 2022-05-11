import img from "../assets/draft.jpg";
import React from "react";
import {
  Favorite,
    Edit
} from "@material-ui/icons";

import "./styles/product_detail.css";
import {Link} from "react-router-dom";

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
          <div className="fav">
            <p className="description">
              Add to favorites
            </p>
            <div className="icon">
              <Favorite />
            </div>
          </div>
        </div>
        <div className="edit">
          <p className="description">
            Edit info
          </p>
          <Link to="/edit_product" className="icon">
            <Edit />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
