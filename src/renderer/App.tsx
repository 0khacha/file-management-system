// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';

import './App.css';

const App = () => {
  return (
    <div className="app-container">
      {/* Sidebar and Routes should not be wrapped in another Router */}
      <Sidebar />
      <AppRoutes />
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
