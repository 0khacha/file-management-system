import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './../../assets/css/sidebar.css';
import logo from '../../assets/icons/OIG1.jpg';
import {
  Menu,
  Folder,
  FileText,
  Upload,
  Download,
  Trash2,
  Settings,
  LogOut,
  ChevronDown
} from 'react-feather';
import {BiSolidDashboard} from "react-icons/bi";

function Sidebar() {
  // Set isNavOpen to false to have the sidebar closed by default
  const [isNavOpen, setIsNavOpen] = useState(false); // Sidebar closed by default
  const [activeLink, setActiveLink] = useState("/"); // Set "My Files" as the default active link

  const toggleMenu = () => {
    setIsNavOpen((prev) => !prev);
    // Toggle body classes based on sidebar state
    if (!isNavOpen) {
      document.body.classList.add("sidebar-open");
      document.body.classList.remove("sidebar-close");
    } else {
      document.body.classList.add("sidebar-close");
      document.body.classList.remove("sidebar-open");
    }
  };

  const handleLinkClick = (name) => {
    setActiveLink(name);
    if (isNavOpen) {
      toggleMenu(); // Close sidebar when a link is clicked
    }
  };

  const toggleCollapse = (e) => {
    e.currentTarget.nextSibling.classList.toggle('showCollapse');
    e.currentTarget.classList.toggle('rotate');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById('navbar');
      if (isNavOpen && sidebar && !sidebar.contains(event.target)) {
        toggleMenu(); // Close sidebar when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavOpen]);

  return (
    <div id="body-pd" className={isNavOpen ? "body-pd" : ""}>
      <div className={`l-navbar ${isNavOpen ? "expander" : ""}`} id="navbar">
        <nav className="nav">
          <div>
            <div className="nav__brand">
              <Menu className="nav__toggle" id="nav-toggle" onClick={toggleMenu} />
              <Link to="/" className="nav__logo"><img className="logo-img" src={logo} alt="Logo" /></Link>
            </div>
            <div className="nav__list">
              <Link to="/" className={`nav__link ${activeLink === "Dashboard" ? "active" : ""}`}
                    onClick={() => handleLinkClick("Dashboard")}>
                <BiSolidDashboard className="nav__icon" />
                <span className="nav__name">Dashboard</span>
              </Link>
              <Link to="/files" className={`nav__link ${activeLink === "My Files" ? "active" : ""}`}
                    onClick={() => handleLinkClick("My Files")}>
                <FileText className="nav__icon" />
                <span className="nav__name">My Files</span>
              </Link>
              <Link to="/folders" className={`nav__link ${activeLink === "Folders" ? "active" : ""}`}
                    onClick={() => handleLinkClick("Folders")}>
                <Folder className="nav__icon" />
                <span className="nav__name">Folders</span>
              </Link>
              <Link to="/upload" className={`nav__link ${activeLink === "Upload" ? "active" : ""}`}
                    onClick={() => handleLinkClick("Upload")}>
                <Upload className="nav__icon" />
                <span className="nav__name">Upload</span>
              </Link>
              <Link to="/download" className={`nav__link ${activeLink === "Download" ? "active" : ""}`}
                    onClick={() => handleLinkClick("Download")}>
                <Download className="nav__icon" />
                <span className="nav__name">Download</span>
              </Link>
              <Link to="/trash" className={`nav__link ${activeLink === "Trash" ? "active" : ""}`}
                    onClick={() => handleLinkClick("Trash")}>
                <Trash2 className="nav__icon" />
                <span className="nav__name">Trash</span>
              </Link>
              <div className="nav__link collapse">
                <Settings className="nav__icon" />
                <span className="nav__name">Settings</span>
                <ChevronDown className="collapse__link" onClick={toggleCollapse} />
                <ul className="collapse__menu">
                  <li><a href="#" className="collapse__sublink">Profile</a></li>
                  <li><a href="#" className="collapse__sublink">Preferences</a></li>
                </ul>
              </div>
            </div>
          </div>
          <Link to="/logout" className="nav__link">
            <LogOut className="nav__icon" />
            <span className="nav__name">Logout</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
