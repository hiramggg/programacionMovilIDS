import React, { useState } from 'react';
import './Global.css';
import logoImage from './logo.png';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Buttons from './ButtonBox';

function Login() {
  const [showForgotPass, setShowForgotPass] = useState(false);
  const [showChangePass, setShowChangePass] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      alert('Inicio de sesión exitoso');
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  const placeHolder = (e) =>{
    alert("Placer Holder");
  };

  const redirectoToSigUp = (e) =>{
    navigate('/Register');
  };



  return (
    <div className="login-container">
      <div className="login-main-container">
        <img src={logoImage} alt="Logo de la aplicación" className="login-logo" />
        <h1>LOGIN</h1>
        <form class="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder='Username'            
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder='Password'            
            />
          </div>
          <button class="submit-button" type="submit">Iniciar Sesión</button>
        </form>
        <Buttons></Buttons>
      </div>
    </div>
    
  );
}

export default Login;
