// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './Navbar.css'; // Ensure this path is correct

const Navbar = ({ onSignUpClick }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert('You have signed out successfully.');
      })
      .catch((error) => {
        console.error('Sign Out Error:', error);
      });
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Mechanical Dept of RVCE</h1>
      <div className="navbar-btns">
        {user ? (
          <button className="navbar-btn" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <button className="navbar-btn" onClick={onSignUpClick}>
            Sign Up
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
