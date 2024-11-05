import React, { useEffect, useState } from 'react';
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './Navbar.css'; 
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
    <nav id="navbar">
      <div>
      <img src={logo} alt="ASM logo" height="" width="200" />

      </div>
            
      <div id="navbar-title">Materials and Processing : A journal from ASM India National Council Trust (INC)</div>
        
      
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
