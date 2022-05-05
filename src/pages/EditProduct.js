import "../pages/styles/edit_product.css";
import {Link} from "react-router-dom";
import React from "react";

const EditProduct = () => {
    return (
        <div className="edit-container">
            <div className="container-wrapper">
                <h1 className="title">EDIT A PRODUCT INFO</h1>
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
                        Change photo<input type="file" name="file" accept=".jpg,.jpeg,.png"/>
                    </div>
                    <Link to="/product">
                        <button className="form-button">EDIT</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;
