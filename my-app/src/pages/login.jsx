// Login.jsx
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
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (emailOrPhone.trim() && password.trim()) {
      setIsLoggedIn(true);
      navigate(redirectTo);
    } else {
      setError('Please enter both email/phone and password.');
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
        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            title={showPassword ? "Hide Password" : "Show Password"}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        {error && <p className="error-message">{error}</p>}
        <button className="login-btn" onClick={handleLogin}>Login</button>
        <p className="signup-text">
          New to Eloc? <a href="/signup">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
