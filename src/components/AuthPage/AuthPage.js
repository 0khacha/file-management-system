import React, { useState } from 'react';
import Login from './login';
import Signup from './Signup';
import './AuthPage.css'; // Custom CSS for design
import logo from './../../../assets/icons/OIG1.jpg'; // Add your logo image here

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container Auth-body">
      <div className="auth-card">
        <img src={logo} alt="Logo" className="logo" /> {/* Logo added here */}
        <div className="header">
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          <p>You welcome back</p>
        </div>
        {isLogin ? <Login /> : <Signup />}
        <div className="form-footer">
          <p className="toggle-text">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <span onClick={toggleForm} className="toggle-link">
              {isLogin ? ' Sign up' : ' Login'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
