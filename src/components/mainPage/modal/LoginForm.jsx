import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequested } from '../../../features/auth/authSlice';
import { validate } from './validationUtils';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ toggleForm, handleSignIn, toggleModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isSignedIn = useSelector(state => state.auth.user);
  
  const handleSignInClick = async () => {
    const validationError = validate(email, password);
    if (validationError) {
      setError(validationError);
      return;
    }

    const response = await fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      dispatch(loginRequested(data.user)); // Update dispatch
      toggleModal();
      navigate("/designs");
      handleSignIn();
      document.querySelector(".modal-overlay").classList.add("closed");
    } else {
      setError('Invalid email or password');
    }
  };


  return (
    <>
      <h1>Login</h1>
      <div className="modal-form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="message-error">{error}</div>
        <button className="form-button" onClick={handleSignInClick}>
          Login
        </button>
        <div className="sub-button">
          <span> Don't have an account? </span>
          <button onClick={toggleForm}>Create Account</button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
