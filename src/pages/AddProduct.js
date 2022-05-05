import "../pages/styles/add_product.css";
import {Link} from "react-router-dom";
import React from "react";

const AddProduct = () => {
    return (
        <div className="add-container">
            <div className="container-wrapper">
                <h1 className="title">ADD A PRODUCT</h1>
                <form className="form">
                    <input placeholder="title" className="form-input"/>
                    <div className="filter">
                        <span className="filter-title">Category:</span>
                        <select className="filter-select">
                            <option selected>Outside plants</option>
                            <option>Flowers</option>
                            <option>Home plants</option>
                        </select>
                    </div>
                    <input placeholder="description" className="form-input"/>
                    <input placeholder="price" className="form-input"/>
                    <div className="file btn btn-lg btn-primary">
                       Add Photo<input type="file" name="file" accept=".jpg,.jpeg,.png"/>
                    </div>
                    <Link to="/profile">
                        <button className="form-button">ADD</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;