import React, { useState, useEffect } from 'react';
import './Hero.css';
import NavButton from '../NavOption/NavOption';
import JournalCard from '../JournalCard/JournalCard';
import ArticleCard from '../ArticleCard/ArticleCard'; // Import the ArticleCard component
import { fetchArticles } from '../../../../backend/articleService'; // Import fetchArticles function
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import necessary Firebase functions

// Importing SVG icons
import HomeIcon from '../../assets/home.svg';
import AboutIcon from '../../assets/about.svg';
import ContactIcon from '../../assets/contact.svg';
import UploadIcon from '../../assets/upload.svg';
import FilesIcon from '../../assets/files.svg';
import UploadPopup from '../UploadPopup/UploadPopup'; // Import your upload pop-up component
import LoginModal from '../LoginModal/LoginModal'; // Import your login modal

const Hero = () => {
  const [mainContent, setMainContent] = useState(<JournalCard />); // Default content
  const [isUploadPopupOpen, setUploadPopupOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false); // State for login modal
  const [isUserLoggedIn, setUserLoggedIn] = useState(false); // State to track user login status
  const [articles, setArticles] = useState([]); // State to hold articles

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserLoggedIn(!!user); // Set user login status
    });

    return () => unsubscribe(); // Cleanup the subscription on unmount
  }, []);

  const handleHomeClick = () => {
    setMainContent(<JournalCard />); // Handle home button click
  };

  const handleUploadClick = () => {
    if (isUserLoggedIn) {
      setUploadPopupOpen(true); // Open upload pop-up if user is logged in
    } else {
      setLoginOpen(true); // Show login modal if user is not logged in
    }
  };

  const handleFilesClick = async () => {
    const fetchedArticles = await fetchArticles(); // Fetch articles from Firestore
    setArticles(fetchedArticles); // Update articles state
    setMainContent(
      <div className="articles-container">
        <button onClick={handleHomeClick} className="back-to-home">Back to Home</button> {/* Button to go back to home */}
        {fetchedArticles.map((article) => (
          <ArticleCard article={article} key={article.id} /> // Render ArticleCard for each article
        ))}
      </div>
    );
  };

  const closeUploadPopup = () => {
    setUploadPopupOpen(false); // Close upload popup
  };

  const closeLoginModal = () => {
    setLoginOpen(false); // Close login modal
  };

  return (
    <div className="hero-section">
      <div className="sidebar">
        <nav>
          <NavButton icon={HomeIcon} label="Home" onClick={handleHomeClick} />
          <NavButton icon={AboutIcon} label="About" />
          <NavButton icon={ContactIcon} label="Contact" />
          <NavButton icon={UploadIcon} label="Upload" onClick={handleUploadClick} />
          <NavButton icon={FilesIcon} label="Files" onClick={handleFilesClick} /> {/* Handle files button click */}
        </nav>
      </div>
      <div className="main-content">
        {mainContent} {/* Render the current main content */}
      </div>

      {/* Render upload pop-up if open */}
      {isUploadPopupOpen && <UploadPopup isOpen={isUploadPopupOpen} onClose={closeUploadPopup} />}
      {/* Render login modal if open */}
      {isLoginOpen && <LoginModal onClose={closeLoginModal} />}
    </div>
  );
};

export default Hero;
