import React, { useState, useEffect, useRef } from 'react';
import './TrashCard.css'; // Assuming you have a CSS file for styles
import { Lock, MoreVertical } from 'react-feather'; // Folder icon from Feather
import img from '../../../assets/icons/image-photo-svgrepo-com.svg';
import pdf from '../../../assets/icons/pdf-svgrepo-com.svg';
import video from '../../../assets/icons/video-file-svgrepo-com.svg';
import music from '../../../assets/icons/mp3-svgrepo-com.svg';
import pptx from '../../../assets/icons/pptx-presentation-file-extension-svgrepo-com.svg';
import txt from '../../../assets/icons/txt-svgrepo-com.svg';
import folder from '../../../assets/icons/folder-svgrepo-com.svg';

const TrashCard = ({ name, type, isFolder, size, dateDeleted, locked, onClick, onRestore, onDeletePermanently }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Toggle the dropdown menu
  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent clicking on file/folder when toggling menu
    setShowMenu(!showMenu);
  };

  // Handle option clicks
  const handleOptionClick = (option) => {
    if (option === 'Restore') {
      onRestore(name);
    } else if (option === 'Delete Permanently') {
      onDeletePermanently(name);
    }
    setShowMenu(false);
  };

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  // Choose the correct icon based on type (file or folder)
  const getFileIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'image':
        return <img src={img} alt="Image Icon" />;
      case 'mp4':
      case 'video':
        return <img src={video} alt="Video Icon" />;
      case 'mp3':
      case 'audio':
        return <img src={music} alt="Audio Icon" />;
      case 'pdf':
        return <img src={pdf} alt="PDF Icon" />;
      case 'pptx':
        return <img src={pptx} alt="PPTX Icon" />;
      case 'folder':
        return <img src={folder} className="folder-icon"></img>; // Use a folder icon, you can use an SVG or FontAwesome
      case 'text':
      default:
        return <img src={txt} alt="Text Icon" />;
    }
  };

  return (
    <div className="trash-card">
      <div className={`trash-icon ${locked ? "locked" : ""}`} onClick={onClick}>
        {getFileIcon(type)}
      </div>
      <div className="trash-details">
        <h3>{name}</h3> {/* Name of the file or folder */}
        <p>{isFolder ? 'Folder' : `${size} KB`}</p> {/* Display file size or folder */}
        <p>Date Deleted: {dateDeleted}</p> {/* Show when it was deleted */}
        {locked && <Lock className="lock-icon" />} {/* Lock icon if locked */}
      </div>

      {/* Three dots for more options */}
      <div className="trash-menu" ref={menuRef}>
        <button className="menu-btn" onClick={toggleMenu}>
          <MoreVertical /> {/* Feather's three-dot icon */}
        </button>

        {showMenu && (
          <ul className="dropdown-menu">
            <li onClick={() => handleOptionClick('Restore')}>Restore</li>
            <li onClick={() => handleOptionClick('Delete Permanently')}>Delete Permanently</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default TrashCard;
