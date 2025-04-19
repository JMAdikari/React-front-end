import React from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';

const Login = ({ onSwitch , onBack }) => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="user" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <img src={password_icon} alt="password" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      <div className="submit-container">
        <button className="submit">Login</button>
        <p>Don't have an account? <span className="link" onClick={onSwitch}>Register</span></p>
        <button className="home-button" onClick={onBack}>← Back to Home</button>
      </div>
    </div>
  );
};

export default Login;
