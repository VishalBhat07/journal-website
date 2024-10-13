import React, {useState} from 'react';
import './Hero.css';
import NavButton from './NavOption';
import JournalCard from './JournalCard';

// Importing SVG icons
import HomeIcon from '../../assets/home.svg';
import AboutIcon from '../../assets/about.svg';
import ContactIcon from '../../assets/contact.svg';
import UploadIcon from '../../assets/upload.svg';
import FilesIcon from '../../assets/files.svg';



const Hero = () => {
  const [mainContent, setMainContent] = useState(null);

  const handleHomeClick = () =>{
    setMainContent(<Home/>);
  };
  return (
    <div className="hero-section">
      <div className="sidebar">
        <nav>
          <NavButton icon={HomeIcon} label="Home" onClick={handleHomeClick}/>
          <NavButton icon={AboutIcon} label="About" />
          <NavButton icon={ContactIcon} label="Contact" />
          <NavButton icon={UploadIcon} label="Upload"/>
          <NavButton icon={FilesIcon} label="Files"/>
        </nav>
      </div>
      <div className="main-content">
        <JournalCard/>
      </div>
    </div>
  );
};

export default Hero;
