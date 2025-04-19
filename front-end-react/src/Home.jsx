import React from 'react';
import './Home.css';

const Home = ({ onNavigate }) => {
  return (
    <div className="home-container">
      <h1>Welcome to Our App</h1>
      <p>Please choose an option to continue:</p>
      <div className="home-buttons">
        <button onClick={() => onNavigate('login')}>Login</button>
        <button onClick={() => onNavigate('register')}>Register</button>
      </div>
    </div>
  );
};

export default Home;
