import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = new URLSearchParams(location.search).get('from') || '/';

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>You need to log in to access this page.</h2>
      <p>Please log in to continue.</p>
      <button
        onClick={() => navigate('/login', { state: { redirectTo: `/${fromPage}` } })}
        style={{
          padding: '0.8rem 1.5rem',
          marginTop: '1rem',
          background: 'black',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Go to Login
      </button>
    </div>
  );
};

export default AuthRedirect;
