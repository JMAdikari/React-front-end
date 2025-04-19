import React from 'react';
import './Home.css';

const Home = ({ onNavigate }) => {
  return (
    <div className="home-background">
      <div className="home-content">
        <h1>JWT Security Research Portal</h1>
        <p>Welcome to the research interface.</p>
        <div className="home-buttons">
          <button onClick={() => onNavigate('login')}>Login</button>
          <button onClick={() => onNavigate('register')}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
