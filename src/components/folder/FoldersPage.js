import React, { useState } from "react";
import FolderCard from "./FolderCard";
import '../../../assets/css/FoldersPage.css';
import folderData from "./FolderData";

const FoldersPage = () => {
  // Set up folders and current sorting in the state
  const [folders, setFolders] = useState(folderData)

  const [sortOption, setSortOption] = useState("Date Added"); // Sort option state
  const [currentFolder, setCurrentFolder] = useState("Folders"); // Current folder state

  // Function to handle sorting and update the folder list accordingly
  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);

    let sortedFolders = [...folders]; // Create a new array copy

    if (option === "Alphabet") {
      sortedFolders.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "Size") {
      sortedFolders.sort((a, b) => b.size - a.size);
    } else if (option === "Date Added") {
      sortedFolders.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    }

    setFolders(sortedFolders); // Set the new sorted folders
  };

  // Function to change folder navigation
  const handleFolderClick = (folderName) => {
    setCurrentFolder(`Folders / ${folderName}`);
  };

  return (
    <div className="folders-page">
      {/* Breadcrumbs for navigation */}
      <div className="breadcrumbs">
        <span>{currentFolder}</span>
      </div>

      {/* Control panel for sorting and display options */}
      <div className="controls">
        <select className="sort-options" value={sortOption} onChange={handleSortChange}>
          <option value="Date Added">Date Added</option>
          <option value="Alphabet">Alphabet</option>
          <option value="Size">Size</option>
        </select>


        <button className="grid-view-btn">&#x2630;</button>
      </div>

      {/* Folder grid to display folder cards */}
      <div className="folders-grid">
        {folders.map((folder, index) => (
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
  );
};

export default FoldersPage;
