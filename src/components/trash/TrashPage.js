import React, { useState } from "react";
import TrashCard from "./TrashCard";
import './TrashPage.css'; // Custom CSS for the Trash Page
import trashData from "./TrashData"; // Data for the trashed items

const TrashPage = () => {
  const [trashedItems, setTrashedItems] = useState(trashData);
  const [sortOption, setSortOption] = useState("Most Recent"); // Default sorting option
  const [currentFolder, setCurrentFolder] = useState("Trash");

  // Group trashed items by dateDeleted
  const groupedTrash = trashedItems.reduce((acc, item) => {
    const date = item.dateDeleted; // Group by the date the item was deleted
    if (!acc[date]) acc[date] = [];
    acc[date].push(item);
    return acc;
  }, {});

  // Sort the dates based on the selected sort option
  const sortedDates = Object.keys(groupedTrash).sort((a, b) => {
    if (sortOption === "Most Recent") {
      return new Date(b) - new Date(a); // Sort by most recent
    } else {
      return new Date(a) - new Date(b); // Sort by oldest
    }
  });

  // Function to handle sorting change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Function to restore an item
  const handleRestore = (itemId) => {
    setTrashedItems(trashedItems.filter(item => item.id !== itemId));
    alert("Item restored successfully.");
  };

  // Function to permanently delete an item
  const handleDeletePermanently = (itemId) => {
    setTrashedItems(trashedItems.filter(item => item.id !== itemId));
    alert("Item deleted permanently.");
  };

  return (
    <div className="trash-page">
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

      {/* Display trashed items grouped by date */}
      <div className="trash-section">
        {sortedDates.map((date) => (
          <div key={date} className="trash-group">
            <h3 className="date-header">{date}</h3> {/* Date header */}
            <hr className="date-separator" /> {/* Horizontal separator */}
            <div className="trash-grid">
              {groupedTrash[date].map((item, index) => (
                <TrashCard
                  key={index}
                  name={item.name}
                  size={item.size}
                  type={item.type}
                  iconType={item.isFolder ? "folder" : "file"} // Determines folder or file icon
                  onRestore={() => handleRestore(item.id)}
                  onDelete={() => handleDeletePermanently(item.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrashPage;
