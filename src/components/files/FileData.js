import { Image, Video, FileText, Music, File } from 'react-feather'; // Example icons
import img from '../../../assets/icons/image-photo-svgrepo-com.svg'

const fileData = [
  { name: "Image1.jpg", type: "image", size: 1200, dateAdded: "2023-09-20", locked: false, addedBy: "User A", icon: img },
  { name: "Document.pdf", type: "pdf", size: 2000, dateAdded: "2023-09-21", locked: false, addedBy: "User B", icon: <File /> },
  { name: "Music.mp3", type: "audio", size: 5400, dateAdded: "2023-09-21", locked: true, addedBy: "User C", icon: <Music /> },
  { name: "Video1.mp4", type: "video", size: 8000, dateAdded: "2023-09-22", locked: false, addedBy: "User D", icon: <Video /> },
  { name: "mini projet.txt", type: "txt", size: 8000, dateAdded: "2023-09-22", locked: false, addedBy: "User D", icon: <Video /> },
  { name: "Presentation.pptx", type: "pptx", size: 5000, dateAdded: "2023-09-22", locked: false, addedBy: "User E", icon: <File /> }
];

export default fileData;
