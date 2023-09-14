import React, { useState } from 'react';
import logoImage from './logo.png';
import Buttons from './ButtonBox';
import './Global.css';

function Forgot() {
  const [email, setEmail] = useState('');

  const verificarCorreo = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica para enviar el correo de recuperación
    if (email && (verificarCorreo(email))) {
      alert(`Correo enviado a: ${email}`);
    } else {
      alert('Por favor, completa el campo de correo electrónico');
    }
  };

  return (
    <div className="login-container">
      <div className="login-main-container">
        <img src={logoImage} alt="Logo de la aplicación" className="login-logo" />
        <h1>FORGOT PASS</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Type your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button className="submit-button" type="submit">Send</button>
        </form>
        <Buttons showLoginInsteadForgot={true}></Buttons>
      </div>
    </div>
  );
}

export default Forgot;
