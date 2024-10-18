import React from "react";
import '../../../assets/css/FolderCard.css'; // Assuming FolderCard.css already contains the necessary styles
import { FileText, Image, Video, Music, Lock } from 'react-feather'; // Import file icons and lock
import img from '../../../assets/icons/image-photo-svgrepo-com.svg'
import pdf from '../../../assets/icons/pdf-svgrepo-com.svg';
import video from '../../../assets/icons/video-file-svgrepo-com.svg';
import music from '../../../assets/icons/mp3-svgrepo-com.svg';
import pptx from '../../../assets/icons/pptx-presentation-file-extension-svgrepo-com.svg';
import txt from '../../../assets/icons/txt-svgrepo-com.svg';

const FileCard = ({ name, type, size, dateAdded, locked, onClick }) => {

  // Choose the correct icon based on file type
  const getFileIcon = (type) => {
    switch (type) {
      case 'image':
        return <img src={img} alt="img"/>;
      case 'video':
        return <img src={video} alt="video"/>;
      case 'audio':
        return <img src={music} alt="music"/>;
      case 'pdf':
        return <img src={pdf} alt="pdf"/>;
      case 'pptx':
        return <img src={pptx} alt="pptx"/>;
      case 'text':
      default:
        return <img src={txt} alt="txt"/>;
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
      </div>
    </div>
  );
};

export default FileCard;
