// UserProfile.js
import React from 'react';
import { ChevronDown,Bell } from 'react-feather'; // Feather Icons
import '../../assets/css/userprofil.css';
import user from '../../assets/icons/OIG1.jpg';

const UserProfile = ({ avatarUrl, username }) => {
  return (
    <div className="user-profile">
      <div className="search-box notifications">
        <Bell className={"bell"}/> {/* Add a notification count if needed */}
      </div>
      <div className="user-info">
        <img src={user} alt="User Avatar" className="user-avatar"/>
        <p className="user-name">{username}</p>
        <ChevronDown size={20} color="#333"/>
      </div>
    </div>
  );
};

export default UserProfile;
