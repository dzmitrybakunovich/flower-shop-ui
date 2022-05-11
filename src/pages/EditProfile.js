import "./styles/edit_profile.css";
import {Link} from "react-router-dom";

const EditProfile = () => {
    return (
        <div className="edit-container">
            <div className="container-wrapper">
                <h1 className="title">EDIT YOUR ACCOUNT</h1>
                <form className="form">
                    <input placeholder="name" className="form-input"/>
                    <input placeholder="last name" className="form-input"/>
                    <input placeholder="username" className="form-input"/>
                    <input placeholder="email" className="form-input"/>
                    <input placeholder="phone number" className="form-input"/>
                    <input placeholder="password" className="form-input"/>
                    <Link to="/profile">
                        <button className="form-button">EDIT</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
