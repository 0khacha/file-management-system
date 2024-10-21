import React from 'react';

const Signup = () => {
  return (
    <form className="auth-form">
      <div className="input-group">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="Enter your full name" />
      </div>

      <div className="input-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>

      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />
      </div>

      <div className="input-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" placeholder="Confirm your password" />
      </div>

      <button type="submit" className="submit-btn">
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
