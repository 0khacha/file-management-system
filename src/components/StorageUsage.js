import React from 'react';

const storageData = [
  { name: 'Images', size: '15.3 GB', color: '#FF5722' },
  { name: 'Documents', size: '256 MB', color: '#FFC107' },
  { name: 'Media Files', size: '3.4 GB', color: '#00BCD4' },
  { name: 'Other Files', size: '3 GB', color: '#4CAF50' },
  { name: 'Unknown Files', size: '175 MB', color: '#9E9E9E' },
];

const StorageUsage = () => {
  return (
    <div className="storage-usage">
      <h2>45.5 GB <span>/ 50 GB</span></h2>
      <div className="storage-bar">
        {storageData.map((item, index) => (
          <div key={index} className="storage-bar-section" style={{ background: item.color, width: `${(parseFloat(item.size) / 50) * 100}%` }}></div>
        ))}
      </div>
      <ul className="storage-list">
        {storageData.map((item, index) => (
          <li key={index}>
            <span className="dot" style={{ background: item.color }}></span>
            <span>{item.name}</span>
            <span>{item.size}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StorageUsage;
