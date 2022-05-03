import "../pages/styles/find_flower.css";
import {Link} from "react-router-dom";

const FindFlower = () => {
    return (
        <div className="find-container">
            <div className="container-wrapper">
                <h1 className="title">Find a flower by photo</h1>
                <form className="form">
                    <div className="file btn btn-lg btn-primary">
                        Add Photo<input type="file" name="file"/>
                    </div>
                    <Link to="/find_flower">
                        <button className="form-button">FIND</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default FindFlower;
