// src/components/MainContent.js

import React from 'react';
import '../../assets/css/maincontent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="folders-section">
        <h3>Folders</h3>
        <div className="folders">
          <div className="folder">Analytics</div>
          <div className="folder">Assets</div>
          <div className="folder">Marketing</div>
        </div>
      </div>

      <div className="recent-files-section">
        <h3>Recent Files</h3>
        <ul className="recent-files">
          <li className="file">Competitor Analysis</li>
          <li className="file">How to Create a Case Study</li>
          <li className="file">Landing Page Structure</li>
        </ul>
      </div>
    </div>
  );
};

export default MainContent;
