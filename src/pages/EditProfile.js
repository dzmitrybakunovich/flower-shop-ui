import "./styles/edit_profile.css";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import React, {useState} from "react";
import {useSelector} from "react-redux";

const EditProfile = () => {
  let {uuid} = useParams();
  const navigate = useNavigate();

  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState(null)
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.put(
      `http://127.0.0.1:8000/api/v1/users/${uuid}/update/`, {
        username: username,
        email: email,
        firstName: firstName,
        lastName: lastName,
      }, {
        headers: {

          "Content-Type": "multipart/form-data",
          'Authorization': `Bearer ${localStorage.getItem('token')}`,

        },
      }
    ).then(response => {
      navigate(`/profile/${uuid}`)
    })
  }

  return (
    <div className="edit-container">
      <div className="container-wrapper">
        <h1 className="title">EDIT YOUR ACCOUNT</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input placeholder="name" className="form-input"
                 onChange={e => setFirstName(e.target.value)}/>
          <input placeholder="last name" className="form-input"
                 onChange={e => setLastName(e.target.value)}/>
          <input placeholder="username" className="form-input"
                 onChange={e => setUsername(e.target.value)}/>
          <input placeholder="email" className="form-input"
                 onChange={e => setEmail(e.target.value)}/>
          <button className="form-button" type="submit">EDIT</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
