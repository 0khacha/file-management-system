import React from 'react';
import '../../../assets/css/RecentFiles.css';
import fileData from './../../components/files/FileData'; // Adjust the import path as needed
import {Link} from 'react-router-dom';

const RecentFiles = () => {
  // Sort by dateAdded and take the recent 4
  const recentFiles = fileData
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)) // Sort in descending order
    .slice(0, 4) // Take the top 4 recent files
    .map(file => ({
      name: file.name.split('.').slice(0, -1).join('.'), // Remove extension
      members: file.members, // Assuming addedBy as members for simplicity
      modified: file.dateAdded // Assuming dateAdded as last modified
    }));

  return (
    <div className="recent-files-container">
      <div className="folder-header">
        <span>Recent files</span>
        <Link to={"/files"} >View all</Link>
      </div>
      <table className="recent-files-table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Members</th>
          <th>Last modified</th>
        </tr>
        </thead>
        <tbody>
        {recentFiles.map((file, index) => (
          <tr key={index}>
            <td>{file.name}</td>
            <td>{file.members}</td>
            <td>{file.modified}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentFiles;
