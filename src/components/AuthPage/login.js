import React from 'react';

const Login = () => {
  return (
    <form className="auth-form">
      <div className="input-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>

      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />
      </div>

      <button type="submit" className="submit-btn">
        Login
      </button>
    </form>
  );
};

export default Login;
