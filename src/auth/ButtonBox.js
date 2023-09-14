import React, { useState } from 'react';
import './Global.css';
import logoImage from './logo.png';
import {Routes, Route, useNavigate} from 'react-router-dom';

function Buttons( {showLoginInstead, showLoginInsteadChange, showLoginInsteadForgot} ) {
  
  const navigate = useNavigate();

  const redirectoToSignUp = (e) =>{
    navigate('/Register');
  };
  const redirectoForgetPass = (e) =>{
    navigate('/Forget');
  };
  const redirectoChangePass = (e) =>{
    navigate('/Change');
  };
  const redirectoLogin = (e) =>{
    navigate('/');
  };



  return (
    <div class="button-box">

        {showLoginInsteadForgot && (
            <button onClick={redirectoLogin} className="signup-link">
            Login
            </button>
        )}
        {!showLoginInsteadForgot && (
                    <button onClick={redirectoForgetPass} className="forgot-password-link">
                    ¿Forgot password?
                    </button>
        )}

        {showLoginInsteadChange && (
            <button onClick={redirectoLogin} className="signup-link">
            Login
            </button>
        )}
        {!showLoginInsteadChange && (
            <button onClick={redirectoChangePass} className="change-password-link">
            Change Pass
            </button>
        )}
        {showLoginInstead && (
            <button onClick={redirectoLogin} className="signup-link">
            Login
            </button>
        )}
        {!showLoginInstead && (
            <button onClick={redirectoToSignUp} className="signup-link">
            Sign Up
            </button>
        )}
        
    </div>
  );
}

export default Buttons;
