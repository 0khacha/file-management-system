// src/App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/dashboard/Dashboard';

import './App.css';
import FoldersPage from "../components/folder/FoldersPage";
import FilesPage from "../components/files/FilesPage";
import SearchBar from "../components/SearchBar";
import UserProfile from "../components/UserProfile";
import user from '../../assets/icons/OIG1.jpg';
import UploadPage from "../components/upload/UploadPage";
import settings from "../components/settings/GeneralSettings"
import GeneralSettings from "../components/settings/GeneralSettings";
import TrashPage from "../components/trash/TrashPage";
import AuthPage from "../components/AuthPage/AuthPage";

const App = () => {
  return (
    <div className="app-container">
      {/* Sidebar and Routes should not be wrapped in another Router */}
      <Sidebar />
      <div className={'searchBar-And-Profil'}>
          <SearchBar/>
          <UserProfile avatarUrl={user} username={"Mohamed khacha"}/>
      </div>
      <AppRoutes />
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/files" element={<FilesPage />} />
      <Route path="/folders" element={<FoldersPage />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/settings" element={<GeneralSettings />} />
      <Route path="/trash" element={<TrashPage />} />
      <Route path="/logout" element={<AuthPage />} />
    </Routes>
  );
};

export default App;
