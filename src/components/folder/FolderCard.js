import React, { useState, useEffect, useRef } from "react";
import '../../../assets/css/FolderCard.css';
import folder from '../../../assets/icons/folder-svgrepo-com.svg';
import { Lock, MoreVertical } from 'react-feather'; // MoreVertical for three dots

const FolderCard = ({ name, icon, filesCount, locked, onClick }) => {
  const [showMenu, setShowMenu] = useState(false); // State to control menu visibility
  const menuRef = useRef(null); // Ref for the dropdown menu

  // Function to toggle the menu
  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent folder click when toggling the menu
    setShowMenu(!showMenu);
  };

  // Function to handle option click (you can replace with actual logic)
  const handleOptionClick = (option) => {
    console.log(`${option} clicked for folder: ${name}`);
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

  return (
    <div className="folder-card">
      <div className={`folder-icon-page ${locked ? "locked" : ""}`} onClick={onClick}>
        <img src={folder} alt={name} />
      </div>
      <div className="folder-details">
        <h3>{name}</h3>
        <p>{filesCount} files</p>
        {locked && <Lock className="lock-icon" />}

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

export default FolderCard;
