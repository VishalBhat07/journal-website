import "./App.css";
import Navbar from "../src/components/Navbar/Navbar.jsx";
import Home from "./components/Home/Hero.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
import SignUpModal from "../src/components/SignUpModal/SignUpModal.jsx";
import LoginModal from "../src/components/LoginModal/LoginModal.jsx";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import QuickLinks from "../src/components/QuickLinks/QuickLinks.jsx";
import BankDetails from "../src/components/BankDetails/BankDetails.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AcademicBenefits from "./pages/AcademicBenefits.jsx";
import IndustryBenefits from "./pages/IndustryBenefits.jsx";
import AuthorGuidelines from "./pages/Guidelines/guidelines.jsx";
import BoardOfMember from "./pages/BoardOfMembers/boardOfMember.jsx";
import CallForPaper from "./pages/CallForPaper.jsx";
import PeerReviewProcess from "./pages/Publication/publication.jsx";
import Uploads from "../src/components/Uploads/Uploads.jsx";
import UploadPopup from "./components/UploadPopup/UploadPopup.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase auth
import RunningText from "./components/RunningText/RunningText.jsx";

function App() {
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false); // Track login state
  const [isUploadPopupOpen, setUploadPopupOpen] = useState(false); // Track upload popup state

  const auth = getAuth(); // Initialize Firebase authentication

  useEffect(() => {
    // Monitor auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedIn(!!user); // Set logged in state based on user presence
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [auth]);

  const handleSignUpClick = () => {
    setLoginOpen(false);
    setSignUpOpen(true);
  };

  const closeSignUpModal = () => {
    setSignUpOpen(false);
  };

  const openLoginModal = () => {
    setSignUpOpen(false);
    setLoginOpen(true);
  };

  const closeLoginModal = () => {
    setLoginOpen(false);
  };

  const openUploadPopup = () => {
    if (isLoggedIn) {
      setUploadPopupOpen(true);
    } else {
      openLoginModal(); // If not logged in, open login modal instead
    }
  };

  const closeUploadPopup = () => {
    setUploadPopupOpen(false);
  };

  return (
    <>
      <Router>
        <Navbar onSignUpClick={handleSignUpClick} />
        <RunningText/>
        <div className="hero-section">
          <Sidebar isLoggedIn={isLoggedIn} onUploadClick={openUploadPopup} />
          <div className="hero-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about/academic-benefits" element={<AcademicBenefits />} />
              <Route path="/about/industry-benefits" element={<IndustryBenefits />} />
              <Route path="/about/board-of-member" element={<BoardOfMember />} />
              <Route path="/author/author-guidelines" element={<AuthorGuidelines />} />
              <Route path="/author/peer-review-process" element={<PeerReviewProcess />} />
              <Route path="/author/call-for-paper" element={<CallForPaper />} />
              <Route path="/uploads" element={<Uploads />} />
            </Routes>
          </div>

          <div className="right-content">
            <QuickLinks />
            <BankDetails />
          </div>
        </div>
        <Footer />
      </Router>

      {isSignUpOpen && (
        <SignUpModal onClose={closeSignUpModal} onLoginClick={openLoginModal} />
      )}

      {isLoginOpen && (
        <LoginModal
          onClose={closeLoginModal}
          onSignUpClick={handleSignUpClick}
        />
      )}

      {isUploadPopupOpen && (
        <UploadPopup isOpen={isUploadPopupOpen} onClose={closeUploadPopup} />
      )}
    </>
  );
}

export default App;
