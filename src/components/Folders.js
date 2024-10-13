import React from 'react';
import '../../assets/css/Folders.css'; // Assuming you have a CSS file to style this
import {
  Folder
} from 'react-feather';

const folders = [
  { name: 'Analytics', files: '11 files', users: ['👤', '👤'] }, // Example avatars
  { name: 'Assets', files: '341 files', users: ['👤'] },
  { name: 'Marketing', files: '112 files', users: ['👤', '👤', '👤'] },
];

const Folders = () => {
  return (
    <div className="folders">
      <div className="folder-header">
        <span>Folders</span>
        <a href="#">View all</a>
      </div>
      <div className="folder-list">
        {folders.map((folder, index) => (
          <div className="folder-item" key={index}>
            <Folder className={"folder-icon"}/>
            <div className="folder-info">
              <div className="folder-name">{folder.name}</div>
              <div className="folder-files">{folder.files}</div>
            </div>
            <div className="folder-users">
              {folder.users.map((user, userIndex) => (
                <span className="user-avatar" key={userIndex}>{user}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Folders;
