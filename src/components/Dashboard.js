import React from 'react';
import SearchBar from './SearchBar';
import StorageService from './storageServices';
import Folders from './Folders';
import StorageUsage from './StorageUsage';
import '../../assets/css/Dashboard.css';
import RecentFiles from "./RecentFiles";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="left-section">
        <SearchBar />
        <StorageService />
        <Folders />
        <RecentFiles/>
      </div>
      <div className="right-section">
        <StorageUsage />
      </div>

    </div>
  );
};

export default Dashboard;
