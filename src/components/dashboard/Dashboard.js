import React from 'react';
import SearchBar from '../SearchBar';
import StorageService from './storageServices';
import Folders from './Folders';
import StorageUsage from './StorageUsage';
import '../../../assets/css/Dashboard.css';
import RecentFiles from "./RecentFiles";
import FileCategoryList from "./StorageDetails";
import StorageDetails from "./StorageDetails";
import UserProfile from "../UserProfile";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="left-section">
        <StorageService />
        <Folders />
        <RecentFiles/>
      </div>
      <div className="right-section">
        <StorageDetails/>
        {/*<StorageUsage />*/}
      </div>

    </div>
  );
};

export default Dashboard;
