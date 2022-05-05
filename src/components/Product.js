import {
  Favorite,
} from "@material-ui/icons";

import {Link} from 'react-router-dom';
import img from "../assets/draft.jpg";

import "../components/styles/product.css";

import React from "react";


const Product = () => {
  return (
      <Link to="/product">
          <div className="container-item">
              <div className="container-circle" />
              <img className="container-img" src={img} alt="img"/>
              <div className="info">
                  <div className="info-icon">
                      <Favorite />
                  </div>
              </div>
          </div>
      </Link>
  );
};

export default Product;
