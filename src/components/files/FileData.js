// fileData.js
import { Image, Video, FileText, Music, File } from 'react-feather'; // Example icons
import img from '../../../assets/icons/image-photo-svgrepo-com.svg';

const fileData = [
  { name: "Image1.jpg", type: "image", size: 1200, dateAdded: "2023-09-20", locked: false, members: "Only you", icon: img },
  { name: "Mohamed resume.pdf", type: "pdf", size: 2000, dateAdded: "2023-09-21", locked: false, members: "Only you", icon: <File /> },
  { name: "Saghru Band.mp3", type: "audio", size: 5400, dateAdded: "2023-09-22", locked: true, members: "Only you", icon: <Music /> },
  { name: "Video1.mp4", type: "video", size: 8000, dateAdded: "2023-09-22", locked: false, members: "4 members", icon: <Video /> },
  { name: "Mini projet SE.txt", type: "txt", size: 8000, dateAdded: "2023-09-22", locked: false, members: "Only you", icon: <Video /> },
  { name: "Presentation.pptx", type: "pptx", size: 5000, dateAdded: "2023-09-22", locked: false, members: "Only you", icon: <File /> }
];

export default fileData;
