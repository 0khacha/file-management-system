import React from 'react';
import '../../../assets/css/Folders.css'; // CSS file for styling
import { Folder, Lock } from 'react-feather'; // Icons from react-feather
import { Link } from 'react-router-dom'; // Link component for navigation
import folderData from "../folder/FolderData"; // Shared folder data
import folder from './../../../assets/icons/folder-svgrepo-com.svg'

const folders = folderData.slice(0, 4); // Display only 4 folders

const Folders = () => {
  return (
    <div className="folders">
      <div className="folder-header">
        <span>Folders</span>
        <Link to={"folders"}>View all</Link>
      </div>
      <div className="folder-list">
        {folders.map((folder, index) => (
          <div className={`folder-item ${folder.locked ? 'locked' : ''}`} key={index}>
            <img src={folder.icon} className="folder-icon" />
            <div className="folder-info">
              <div className="folder-name">{folder.name}</div>
              <div className="folder-files">{folder.filesCount} files</div>
            </div>
            {/* Display lock icon if folder is locked */}
            {folder.locked && <Lock className="lock-icon" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Folders;
