import React, { useState } from 'react';
import logoImage from './logo.png';
import './Global.css';
import Buttons from './ButtonBox';


function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (name && email && password) {
 
      alert('Registro exitoso');
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-main-container">
      <img src={logoImage} alt="Logo de la aplicación" className="login-logo" />
      <h1>SIGN UP</h1>
      <form class="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Type your name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Type your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <div className="password-space">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Type your password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="button" onClick={handleShowPassword}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <button class="submit-button" type="submit">Sign Up</button>
      </form>
        <Buttons showLoginInstead={true}></Buttons>
      </div>
    </div>
  );
}

export default SignUp;
