import "../pages/styles/profile.css";

import profile_pic from "../assets/user.png";

import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import axios from "axios";
import {actionCreator} from "../store/actions";
import {useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Profile = () => {
  let {uuid} = useParams();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.authReducer.token)
  const [user, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedFile, setSelectedFile] = React.useState(null);

  useEffect(() => {
      if (isLoading)
        axios.get(
          `http://127.0.0.1:8000/api/v1/users/${uuid}/`,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            },
          }
        ).then(response => {
            if (localStorage.getItem('user')) {
              setUser(response.data)
              setIsLoading(false)
              return
            }
            localStorage.setItem('user', JSON.stringify(response.data));
            setUser(response.data)
            dispatch(
              actionCreator.setUser(response.data)
            )
            setIsLoading(false)
          }
        )

    }, []
  )


  const handleFileSelect = (event) => {
    event.preventDefault()
    axios.put(
      `http://127.0.0.1:8000/api/v1/users/${uuid}/update/`, {
        photo: event.target.files[0],
      }, {

        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': `Bearer ${token}`,
        },
      }
    ).then(response => {
        console.log('true')
      }
    )
  }

  if (isLoading)
    return 'Loading...'

  return (
    <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img src={user.photo ? user.photo : profile_pic} alt=""/>
              {JSON.parse(localStorage.getItem('user')).uuid === user.uuid &&
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" accept=".jpg,.jpeg,.png"
                       onChange={handleFileSelect}/>
              </div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <div className="profile-head-row">
                {JSON.parse(localStorage.getItem('user')).uuid === user.uuid &&
                <div className="profile-buttons">
                  <Link to={`/edit_profile/${user.uuid}`}>
                    <button className="profile-edit-btn">Edit profile</button>
                  </Link>
                  <Link to="/add_product">
                    <button className="profile-edit-btn">Add product</button>
                  </Link>
                </div>}
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
                    <p>{user.username}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>First name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user.firstName}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Last Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user.lastName}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user.email}</p>
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