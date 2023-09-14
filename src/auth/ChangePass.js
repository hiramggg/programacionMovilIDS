
import React, { useState } from 'react';
import logoImage from './logo.png';
import './Global.css';
import Buttons from './ButtonBox';

function Change() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  let [contador, setcontador] = useState(0);  

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    setcontador(contador+1);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(contador<10){
      alert('La contraseña es menor al tamaño minimo');
    }else if (newPassword === confirmPassword) {
      alert('Contraseña cambiada con éxito');
    } else {
      alert('Las contraseñas no coinciden');
    }
  };

  return (
    <div className="login-container">
      <div className="login-main-container">
      <img src={logoImage} alt="Logo de la aplicación" className="login-logo" />
      <h1>Reset Password</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="password"
            value={oldPassword}
            onChange={handleOldPasswordChange}
            placeholder="Contraseña anterior"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            placeholder="Escribe tu nueva contraseña"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Repite tu nueva contraseña"
          />
        </div>
        <button className="submit-button" type="submit">Cambiar contraseña</button>
      </form>
        <Buttons showLoginInsteadChange={true}></Buttons>
      </div>
    </div>
  );
}

export default Change;
