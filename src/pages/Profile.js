import "../pages/styles/profile.css";

import profile_pic from "../assets/user.png";

import {Link} from "react-router-dom";



const Profile = () => {

    return (
        <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={profile_pic} alt=""/>
                            <div className="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file" accept=".jpg,.jpeg,.png"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <div className="profile-head-row">
                                <h5>
                                    User name
                                </h5>
                                <div className="profile-buttons">
                                    <Link to="/edit_profile">
                                    <button className="profile-edit-btn">Edit profile</button>
                                    </Link>
                                    <Link to="/add_product">
                                        <button className="profile-edit-btn">Add product</button>
                                    </Link>
                                </div>
                            </div>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab"
                                       role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab"
                                       role="tab" aria-controls="products" aria-selected="false">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab"
                                       role="tab" aria-controls="products" aria-selected="false">Favorites</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="tab-content home-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel"
                                 aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>User Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Username</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>First Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>First name</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Last Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Last name</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>user@gmail.com</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>123 456 7890</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Profile;
