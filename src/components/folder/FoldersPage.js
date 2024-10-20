import React, { useState } from "react";
import FolderCard from "./FolderCard";
import '../../../assets/css/FoldersPage.css';
import folderData from "./FolderData";

const FoldersPage = () => {
  const [folders, setFolders] = useState(folderData);
  const [sortOption, setSortOption] = useState("Most Recent"); // Default sorting option
  const [currentFolder, setCurrentFolder] = useState("Folders");

  // Group folders by dateAdded
  const groupedFolders = folders.reduce((acc, folder) => {
    const date = folder.dateAdded; // Group by the date the folder was added
    if (!acc[date]) acc[date] = [];
    acc[date].push(folder);
    return acc;
  }, {});

  // Sort the dates based on the selected sort option
  const sortedDates = Object.keys(groupedFolders).sort((a, b) => {
    if (sortOption === "Most Recent") {
      return new Date(b) - new Date(a); // Sort by most recent
    } else {
      return new Date(a) - new Date(b); // Sort by oldest
    }
  });

  // Function to handle the sorting change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Function to handle folder click navigation
  const handleFolderClick = (folderName) => {
    setCurrentFolder(`Folders / ${folderName}`);
  };

  return (
    <div className="folders-page">
      {/* Breadcrumbs for navigation */}
      <div className="breadcrumbs">
        <span>{currentFolder}</span>
      </div>

      {/* Control panel for sorting */}
      <div className="controls">
        <select className="sort-options" value={sortOption} onChange={handleSortChange}>
          <option value="Most Recent">Most Recent</option>
          <option value="Oldest">Oldest</option>
        </select>

        <button className="grid-view-btn">&#x2630;</button>
      </div>

      {/* Display folders grouped by date */}
      <div className="folders-section">
        {sortedDates.map((date) => (
          <div key={date} className="folder-group">
            <h3 className="date-header">{date}</h3> {/* Date header */}
            <hr className="date-separator" /> {/* Horizontal separator */}
            <div className="folders-grid">
              {groupedFolders[date].map((folder, index) => (
                <FolderCard
                  key={index}
                  name={folder.name}
                  icon={folder.icon} // Reusing the Feather icon component
                  filesCount={folder.filesCount}
                  locked={folder.locked}
                  onClick={() => handleFolderClick(folder.name)} // Handle click to navigate into folder
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoldersPage;
