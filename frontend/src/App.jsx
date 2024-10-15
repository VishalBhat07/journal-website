import './App.css';
import Navbar from '../src/components/Navbar/Navbar.jsx';
import Hero from '../src/components/Hero/Hero.jsx';
import Footer from '../src/components/Footer/Footer.jsx';
import SignUpModal from '../src/components/SignUpModal/SignUpModal.jsx';
import LoginModal from '../src/components/LoginModal/LoginModal.jsx';

import { useState } from 'react';

function App() {
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleSignUpClick = () => {
    // Close login modal if it's open
    setLoginOpen(false);
    setSignUpOpen(true);
  };

  const closeSignUpModal = () => {
    setSignUpOpen(false);
  };

  const openLoginModal = () => {
    // Close sign up modal if it's open
    setSignUpOpen(false);
    setLoginOpen(true);
  };

  const closeLoginModal = () => {
    setLoginOpen(false);
  };

  return (
    <>
      <Navbar onSignUpClick={handleSignUpClick} />
      <Hero />
      <Footer />
      
      {isSignUpOpen && (
        <SignUpModal 
          onClose={closeSignUpModal} 
          onLoginClick={openLoginModal} 
        />
      )}
      
      {isLoginOpen && (
        <LoginModal 
          onClose={closeLoginModal} 
          onSignUpClick={handleSignUpClick} // To switch back to Sign Up
        />
      )}
    </>
  );
}

export default App;
