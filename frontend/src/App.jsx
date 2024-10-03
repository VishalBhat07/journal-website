// App.jsx
import './App.css';
import Navbar from '../src/components/Navbar/Navbar.jsx';
import Hero from '../src/components/Hero/Hero.jsx';
import Footer from '../src/components/Footer/Footer.jsx';
import SignUpModal from '../src/components/SignUpModal/SignUpModal.jsx'; // Update with the correct path
import LoginModal from '../src/components/LoginModal/LoginModal.jsx'; // Update with the correct path
import { useState } from 'react';

function App() {
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleSignUpClick = () => {
    setSignUpOpen(true);
  };

  const handleLoginClick = () => {
    setLoginOpen(true);
  };

  const closeSignUpModal = () => {
    setSignUpOpen(false);
  };

  const closeLoginModal = () => {
    setLoginOpen(false);
  };

  const openLoginModal = () => {
    setSignUpOpen(false);
    setLoginOpen(true);
  };

  const openSignUpModal = () => {
    setLoginOpen(false);
    setSignUpOpen(true);
  };

  return (
    <>
      <Navbar onSignUpClick={handleSignUpClick} onLoginClick={handleLoginClick} />
      <Hero />
      <Footer />
      {isSignUpOpen && <SignUpModal onClose={closeSignUpModal} onLoginClick={openLoginModal} />}
      {isLoginOpen && <LoginModal onClose={closeLoginModal} onSignUpClick={openSignUpModal} />}
    </>
  );
}

export default App;
