import "./App.css";
import Navbar from "../src/components/Navbar/Navbar.jsx";
import Hero from "../src/components/Hero/Hero.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
import SignUpModal from "../src/components/SignUpModal/SignUpModal.jsx";
import LoginModal from "../src/components/LoginModal/LoginModal.jsx";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import QuickLinks from "../src/components/QuickLinks/QuickLinks.jsx";
import BankDetails from "../src/components/BankDetails/BankDetails.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AcademicBenefits from "./pages/AcademicBenefits.jsx";
import IndustryBenefits from "./pages/IndustryBenefits.jsx";
import AuthorGuidelines from "./pages/Guidelines/guidelines.jsx";
import BoardOfMember from "./pages/BoardOfMember.jsx";
import CallForPaper from "./pages/CallForPaper.jsx";
import PeerReviewProcess from "./pages/Publication/publication.jsx";
import Uploads from "../src/components/Uploads/Uploads.jsx";
import UploadPopup from "./components/UploadPopup/UploadPopup.jsx";

function App() {
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false); // Track login state

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

  const handleLogin = () => {
    setLoggedIn(true); // Set user as logged in
    closeLoginModal(); // Close login modal after successful login
  };

  return (
    <>
      <Router>
        <Navbar onSignUpClick={handleSignUpClick} />
        <div className="hero-section">
          <Sidebar isLoggedIn={isLoggedIn}/>
          <div className="hero-content">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about/academic-benefits" element={<AcademicBenefits />} />
              <Route path="/about/industry-benefits" element={<IndustryBenefits />} />
              <Route path="/about/board-of-member" element={<BoardOfMember />} />
              <Route path="/author/author-guidelines" element={<AuthorGuidelines />} />
              <Route path="/author/peer-review-process" element={<PeerReviewProcess />} />
              <Route path="/author/call-for-paper" element={<CallForPaper />} />

              <Route path="/upload-article" element={isLoggedIn ? <UploadPopup isOpen={true}/> : <LoginModal/>} /> {/* Conditional rendering */}
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
          onSignUpClick={handleSignUpClick} // To switch back to Sign Up
          onLogin={handleLogin} // Pass the handleLogin function to the LoginModal
        />
      )}
    </>
  );
}

export default App;
