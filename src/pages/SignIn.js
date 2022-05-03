import {Link} from 'react-router-dom';

import "../pages/styles/sign_in.css";

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="container-wrapper">
        <h1 className="title">SIGN IN</h1>
        <form className="form">
          <input placeholder="username" className="form-input"/>
          <input placeholder="password" className="form-input"/>
          <button className="form-button">LOGIN</button>
          <Link className="form-link" to="/register">CREATE A NEW ACCOUNT</Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
