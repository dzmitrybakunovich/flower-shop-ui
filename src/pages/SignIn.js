import {
  Link,
  useNavigate,
} from 'react-router-dom';
import "../pages/styles/sign_in.css";
import React, {useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {actionCreator} from "../store/actions";
import {
  VisibilityOutlined,
    VisibilityOffOutlined
} from "@material-ui/icons";


const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(username, password)
    axios.post(
      'http://127.0.0.1:8000/api/v1/users/auth/jwt-token/', {
        username: username,
        password: password
      }
    ).then(response => {
        if (response.status === 200) {
          setError('')
          const token = response.data.access
          localStorage.setItem('token', token);
          dispatch(
            actionCreator.authenticateSuccess(token)
          )
          navigate('/profile');
        }
      }
    )
  }

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="signin-container">
      <div className="container-wrapper">
        <h1 className="title">SIGN IN</h1>
        {error}
        <form className="form" onSubmit={handleSubmit}>
          <input
              type="email"
            placeholder="username"
            className="form-input"
            onChange={e => setUsername(e.target.value)}
          />
          <input
              type={passwordShown ? "text" : "password"}
            placeholder="password"
            className="form-input"
            onChange={e => setPassword(e.target.value)}
          />
          <button className="visibility-button" onClick={togglePassword}>{passwordShown ? <VisibilityOutlined/> : <VisibilityOffOutlined/>}</button>
          <button className="form-button" type="submit">LOGIN</button>
          <Link className="form-link" to="/register">CREATE A NEW ACCOUNT</Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
