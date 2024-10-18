import React from 'react';
import '../../../assets/css/RecentFiles.css';

const recentFiles = [
  { name: 'SE mini project', members: 'Only you', modified: 'Sep 3, 2023' },
  { name: 'How to Create a Case Study', members: '3 members', modified: 'Jun 12, 2023' },
  { name: 'Big data & AI', members: '10 members', modified: 'Jul 17, 2023' },
  { name: 'Landing Page Structure', members: '10 members', modified: 'Jul 19, 2023' }
];

const RecentFiles = () => {
  return (
    <div className="recent-files-container">
      <div className="folder-header">
        <span>Recent files</span>
        <a href="#">View all</a>
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
