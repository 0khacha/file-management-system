import React, { useState } from "react";
import FileCard from "./FileCard"; // Similar to FolderCard, but for files
import "../../../assets/css/FoldersPage.css"; // Reuse the same CSS file
import fileData from "./FileData"; // Centralized file data

const FilesPage = () => {
  // Set up files and current sorting in the state
  const [files, setFiles] = useState(fileData);
  const [currentFolder, setCurrentFolder] = useState("Files"); // Current folder state
  const [selectedType, setSelectedType] = useState("All"); // Selected type state

  // Group files by dateAdded
  const groupedFiles = files.reduce((acc, file) => {
    const date = file.dateAdded; // Group by the date added
    if (!acc[date]) acc[date] = [];
    acc[date].push(file);
    return acc;
  }, {});

  // Sort dates in descending order so the most recent dates appear first
  const sortedDates = Object.keys(groupedFiles).sort((a, b) => new Date(b) - new Date(a));

  // Function to handle sorting and update the file list accordingly
  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);

    let sortedFiles = [...files]; // Create a new array copy

    if (option === "Alphabet") {
      sortedFiles.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "Size") {
      sortedFiles.sort((a, b) => b.size - a.size);
    } else if (option === "Date Added") {
      sortedFiles.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    } else if (option === "Type") {
      const typeOrder = ["image", "pdf", "music", "video", "pptx", "document"];
      sortedFiles.sort((a, b) => typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type));
    }

    setFiles(sortedFiles); // Set the new sorted files
  };

  // Function to handle type filtering
  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div className="folders-page"> {/* Reusing the same class as folders-page */}
      {/* Breadcrumbs for navigation */}
      <div className="breadcrumbs">
        <span>{currentFolder}</span>
      </div>

      {/* Control panel for sorting and display options */}
      <div className="controls">

        <select className="sort-options" value={selectedType} onChange={handleTypeChange} >
          <option value="All">All</option>
          <option value="image">Images</option>
          <option value="video">Videos</option>
          <option value="music">Music</option>
          <option value="document">Documents</option>
          <option value="pdf">PDFs</option>
          <option value="pptx">PPTX</option>
        </select>

        <button className="grid-view-btn">&#x2630;</button>
      </div>

      {/* Display grouped files by date */}
      <div className="files-section">
        {sortedDates.map((date) => (
          <div key={date} className="file-group">
            <h3 className="date-header">{date}</h3> {/* Date header */}
            <hr className="date-separator" /> {/* Horizontal line (border) under the date */}
            <div className="file-list">
              {groupedFiles[date].filter(file => selectedType === "All" || file.type === selectedType).map((file, index) => (
                <FileCard
                  key={index}
                  name={file.name}
                  type={file.type} // File type (image, pdf, etc.)
                  size={file.size}
                  dateAdded={file.dateAdded}
                  addedBy={file.addedBy} // Show who added the file
                  locked={file.locked} // Display lock icon if file is locked
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilesPage;
