import React, { useState, useRef } from 'react';
import { Upload as UploadIcon } from 'lucide-react';
import '../../../assets/css/UploadPage.css';

const UploadPage = () => {
  const [fileList, setFileList] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newFiles = files.map(file => ({
      name: file.webkitRelativePath || file.name,
      size: file.size,
      date: new Date().toLocaleDateString(),
      type: file.webkitRelativePath ? 'folder' : 'file',
    }));

    setFileList(prev => [...prev, ...newFiles]);
    event.target.value = ''; // Reset input value for re-upload of the same file/folder
  };

  const handleRemoveFile = (fileName) => {
    setFileList(prev => prev.filter(file => file.name !== fileName));
  };

  return (
    <div className="upload-page">
      {/* Upload Area */}
      <div className="upload-area" onClick={() => fileInputRef.current.click()}>
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          multiple
          webkitdirectory=""
          directory=""
        />
        <div className="upload-icon">
          <UploadIcon size={48} />
        </div>
        <p className="upload-text">Click here to upload files or folders</p>
      </div>

      {/* Uploaded Files List */}
      <div className="uploaded-files">
        <h3>All Uploaded Documents</h3>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Date Uploaded</th>
            <th>Size</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {fileList.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
              <td>{file.type}</td>
              <td>{file.date}</td>
              <td>{(file.size / (1024 * 1024)).toFixed(2)} MB</td>
              <td>
                <button onClick={() => handleRemoveFile(file.name)} className="remove-button">
                  Remove
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UploadPage;
