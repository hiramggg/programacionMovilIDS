import React, { useState } from 'react';
import logoImage from './logo.png';
import './Global.css';
import Buttons from './ButtonBox';


function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  let [contador, setcontador] = useState(0);  

  const verificarCorreo = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    const regex = /^[A-Za-z\s]+$/;
  
    if (regex.test(inputValue) || inputValue === "") {
      setName(inputValue);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setcontador(contador+1);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(contador < 10){
      alert('Ingrese una contraseña valida');
    }else if (name && email && password && (verificarCorreo(email))) {
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
