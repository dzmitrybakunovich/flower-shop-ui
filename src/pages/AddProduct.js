import "../pages/styles/add_product.css";
import {Link} from "react-router-dom";

const AddProduct = () => {
    return (
        <div className="add-container">
            <div className="container-wrapper">
                <h1 className="title">ADD A PRODUCT</h1>
                <form className="form">
                    <input placeholder="title" className="form-input"/>
                    <input placeholder="description" className="form-input"/>
                    <input placeholder="price" className="form-input"/>
                    <div className="file btn btn-lg btn-primary">
                       Add Photo<input type="file" name="file"/>
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
