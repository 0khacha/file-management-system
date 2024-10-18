import React from "react";
import '../../../assets/css/FolderCard.css';
import folder from '../../../assets/icons/folder-svgrepo-com.svg'
import
{

  Lock
}from'react-feather'
const FolderCard = ({ name, icon, filesCount, locked, onClick }) =>{
  return (
    <div className="folder-card">
      <div className={`folder-icon-page ${locked ? "locked" : ""}`} onClick={onClick}>
        <img src={folder} alt={name} />
      </div>
      <div className="folder-details">
        <h3>{name}</h3>
        <p>{filesCount} files</p>
        {locked && <Lock className="lock-icon"></Lock>}
      </div>
    </div>
  );
};

export default FolderCard;
