import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Login from './Components/LoginSingup/Login';
import Register from './Components/LoginSingup/Register';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'login':
        return <Login onSwitch={() => setPage('register')} onBack={() => setPage('home')} />;
      case 'register':
        return <Register onSwitch={() => setPage('login')} onBack={() => setPage('home')} />;
      default:
        return <Home onNavigate={setPage} />;
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;
