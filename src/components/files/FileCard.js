import React, { useState, useEffect, useRef } from "react";
import '../../../assets/css/FolderCard.css'; // Assuming FolderCard.css already contains the necessary styles
import { Lock, MoreVertical } from 'react-feather'; // Import MoreVertical for the three-dot menu
import img from '../../../assets/icons/image-photo-svgrepo-com.svg';
import pdf from '../../../assets/icons/pdf-svgrepo-com.svg';
import video from '../../../assets/icons/video-file-svgrepo-com.svg';
import music from '../../../assets/icons/mp3-svgrepo-com.svg';
import pptx from '../../../assets/icons/pptx-presentation-file-extension-svgrepo-com.svg';
import txt from '../../../assets/icons/txt-svgrepo-com.svg';

const FileCard = ({ name, type, size, dateAdded, locked, onClick }) => {
  const [showMenu, setShowMenu] = useState(false); // State to control menu visibility
  const menuRef = useRef(null); // Ref for the dropdown menu

  // Function to toggle the menu
  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent file click when toggling the menu
    setShowMenu(!showMenu);
  };

  // Function to handle option click (you can replace with actual logic)
  const handleOptionClick = (option) => {
    console.log(`${option} clicked for file: ${name}`);
    setShowMenu(false); // Hide the menu after option is clicked
  };

  // Close the dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    // Attach the event listener to detect outside clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // Choose the correct icon based on file type
  const getFileIcon = (type) => {
    switch (type) {
      case 'image':
        return <img src={img} alt="img" />;
      case 'video':
        return <img src={video} alt="video" />;
      case 'audio':
        return <img src={music} alt="music" />;
      case 'pdf':
        return <img src={pdf} alt="pdf" />;
      case 'pptx':
        return <img src={pptx} alt="pptx" />;
      case 'text':
      default:
        return <img src={txt} alt="txt" />;
    }
  };

  return (
    <div className="folder-card"> {/* Reusing the same class as folder-card */}
      <div className={`folder-icon-page ${locked ? "locked" : ""}`} onClick={onClick}>
        {/* Show file icon based on the file type */}
        {getFileIcon(type)}
      </div>
      <div className="folder-details">
        <h3>{name}</h3> {/* File name */}
        <p>{size} KB</p> {/* File size */}
        {locked && <Lock className="lock-icon" />} {/* Show lock icon if file is locked */}

        {/* Three dots (menu button) */}
        <div className="folder-menu" ref={menuRef}>
          <button className="menu-btn" onClick={toggleMenu}>
            <MoreVertical /> {/* Feather's three-dot icon */}
          </button>

          {/* Dropdown menu */}
          {showMenu && (
            <ul className="dropdown-menu">
              <li onClick={() => handleOptionClick("Rename")}>Rename</li>
              <li onClick={() => handleOptionClick("Delete")}>Delete</li>
              <li onClick={() => handleOptionClick("Mot de passe")}>Mot de passe</li>
              <li onClick={() => handleOptionClick("Details")}>Details</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileCard;
