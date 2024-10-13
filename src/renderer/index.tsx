import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // React Router for routing
import App from './App';



ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
