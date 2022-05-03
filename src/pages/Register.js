import "../pages/styles/register.css";
import {Link} from "react-router-dom";

const Register = () => {
  return (
    <div className="register-container">
      <div className="container-wrapper">
        <h1 className="title">CREATE AN ACCOUNT</h1>
        <form className="form">
          <input placeholder="name" className="form-input"/>
          <input placeholder="last name" className="form-input"/>
          <input placeholder="username" className="form-input"/>
          <input placeholder="email" className="form-input"/>
          <input placeholder="phone number" className="form-input"/>
          <input placeholder="password" className="form-input"/>
          <input placeholder="confirm password" className="form-input"/>
          <span className="form-agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <Link to="/profile">
            <button className="form-button">CREATE</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
