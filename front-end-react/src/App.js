import React, { useState } from 'react';
import './App.css';
import Login from './Components/LoginSingup/Login';
import Register from './Components/LoginSingup/Register';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      {isLogin ? (
        <Login onSwitch={() => setIsLogin(false)} />
      ) : (
        <Register onSwitch={() => setIsLogin(true)} />
      )}
    </div>
  );
}

export default App;
