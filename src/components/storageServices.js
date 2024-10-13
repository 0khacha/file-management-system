import React from 'react';
import { MoreVertical } from 'lucide-react';
import { FaGoogleDrive, FaDropbox, FaCloud } from 'react-icons/fa';
import '../../assets/css/StorageService.css'

const storageServices = [
  { name: 'Google Drive', used: 45.5, total: 50, icon: <FaGoogleDrive />, className: 'google-drive' },
  { name: 'Dropbox', used: 1.2, total: 3, icon: <FaDropbox />, className: 'dropbox' },
  { name: 'OneDrive', used: 2.5, total: 5, icon: <FaCloud />, className: 'onedrive' },
];

const StorageService = () => {
  return (
    <div className="storage-container">
      {storageServices.map((service, index) => (
        <div key={index} className={`storage-card ${service.className}`}>
          <div className="card-header">
            <div className="service-icon">{service.icon}</div>
            <MoreVertical className="more-icon" />
          </div>
          <div className="service-name">{service.name}</div>
          <div className="storage-info">
            {service.used} GB / {service.total} GB
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${(service.used / service.total) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StorageService;
