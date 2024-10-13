import React from 'react';
import '../../assets/css/StoragePanel.css';

const StoragePanel = () => {
  return (
    <div className="storage-panel">
      <h3>Storage</h3>
      <div className="storage-item">
        <p>Google Drive: 45.5 GB / 50 GB</p>
        <progress value="45.5" max="50"></progress>
      </div>
      <div className="storage-item">
        <p>Dropbox: 2 GB / 10 GB</p>
        <progress value="2" max="10"></progress>
      </div>
      <div className="storage-item">
        <p>OneDrive: 1.5 GB / 15 GB</p>
        <progress value="1.5" max="15"></progress>
      </div>
      <button className="upgrade-btn">Upgrade</button>
    </div>
  );
};

export default StoragePanel;
