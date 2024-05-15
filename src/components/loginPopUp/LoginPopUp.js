
import React, { useState } from 'react';
import './LoginPopUp.css';
import cross_icon from '../../assets/cross_icon.png';

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Login');

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={cross_icon} alt="Close" />
        </div>
        <div className='login-popup-inputs'>
          {currState === "Login" ? null : <input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Your Password' required />
        </div>
        <button>{currState === "Sign-Up" ? "Create Account" : "Login"}</button>
        <div className="login-pop-up-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ?
          <p>Create a New Account <span onClick={() => setCurrState("Sign-Up")}>Click Here</span></p>
          : <p>Already have an Account <span onClick={() => setCurrState("Login")}>Login here</span></p>}
      </form>
      <div><h2>hello</h2> </div>
    </div>
  );
};

export default LoginPopUp;
