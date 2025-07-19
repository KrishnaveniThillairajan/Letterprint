import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Text');
  };

  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <h2>Welcome, User!</h2>
        <p>Please log in</p>
        <input type="text" placeholder="User Name" required />
        <input type="password" placeholder="Password" required />
        <input type="submit" value="Log In" />
        <div className="links">
          <a href="/Signup">Signup</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
