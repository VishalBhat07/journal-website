// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './Navbar.css'; // Ensure this path is correct
import logo from '../../assets/logo.png'

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
          {/* <img src={logo} alt="navbar-logo" className="navbar-logo"/>
      <h1 className="navbar-title">Materials and Processing A journal from ASM India National Council (INC)</h1>
        {user ? (
          <button className="navbar-btn" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <button className="navbar-btn" onClick={onSignUpClick}>
            Sign Up
          </button>
        )} */},
    <nav id="navbar">
      <div>
      <img src={logo} alt="ASM logo" height="" width="200" />

      </div>
            
      <div id="navbar-title">Materials and Processing A journal from ASM India National Council (INC)</div>
        
      
      {user ? (
          <button className="btn btn-outline-light" onClick={handleSignOut} id="button">
            Sign Out
          </button>
        ) : (
          <button className="btn btn-outline-light" onClick={onSignUpClick} id="button">
            Sign Up
          </button>
        )}

    </nav>

  );
};

export default Navbar;
