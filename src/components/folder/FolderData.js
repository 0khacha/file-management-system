// folderData.js

import { Folder } from 'react-feather'; // Import the Feather icon
import folder from '../../../assets/icons/folder-svgrepo-com.svg'

// Create an array of folder data
const folderData = [
  { name: "Desktop files", icon: folder, filesCount: 82, size: 250, locked: true, dateAdded: "2023-09-15" },
  { name: "Big Data", icon: folder, filesCount: 12, size: 250, locked: false, dateAdded: "2023-09-15" },
  { name: "Analytics", icon: folder, filesCount: 30, size: 250, locked: false, dateAdded: "2023-09-15" },
  { name: "My documents", icon: folder, filesCount: 0, size: 100, locked: false, dateAdded: "2023-09-16" },
  { name: "Photos", icon: folder, filesCount: 342, size: 500, locked: true, dateAdded: "2023-09-14" },
];

// Export the folder data for use in other components
export default folderData;
