import "../pages/styles/register.css";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {actionCreator} from "../store/actions";
import React, {useState} from "react";
import {useDispatch} from "react-redux";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    axios.post(
      'http://0.0.0.0:8000/api/v1/users/sign-up/', {
        username: username,
        password: password,
        password2: password2,
        email: email,
        firstName: firstName,
        lastName: lastName,
      }
    ).then(response => {
        if (response.status === 201) {
          navigate('/sign_in');
        }
      }
    )
  }

  return (
    <div className="register-container">
      <div className="container-wrapper">
        <h1 className="title">CREATE AN ACCOUNT</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input placeholder="name" className="form-input" onChange={e => setFirstName(e.target.value)}/>
          <input placeholder="last name" className="form-input" onChange={e => setLastName(e.target.value)}/>
          <input placeholder="username" className="form-input" onChange={e => setUsername(e.target.value)}/>
          <input placeholder="email" className="form-input" onChange={e => setEmail(e.target.value)}/>
          {/*<input placeholder="phone number" className="form-input" onChange={e => setUsername(e.target.value)}/>*/}
          <input placeholder="password" className="form-input" onChange={e => setPassword(e.target.value)}/>
          <input placeholder="confirm password" className="form-input" onChange={e => setPassword2(e.target.value)}/>
          <span className="form-agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="form-button" type="submit">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
