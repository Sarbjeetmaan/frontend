import React, { useState } from 'react';
import './login.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../Context/GlobalState';

const Login = () => {
  const { setIsLoggedIn } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.redirectTo || '/';

  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Dummy login validation
    if (emailOrPhone.trim() && password.trim()) {
      setIsLoggedIn(true);
      navigate(redirectTo);
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1 className="brand">El<span className="dot">•</span>oc</h1>
        <p className="tagline">Explore quality tech with style.</p>
      </div>
      <div className="login-right">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Enter Email or Mobile Number"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" onClick={handleLogin}>Login</button>
        <p className="signup-text">
          New to Eloc? <a href="/signup">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
