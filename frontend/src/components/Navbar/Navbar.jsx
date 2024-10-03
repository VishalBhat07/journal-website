// Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = ({ onSignUpClick, onLoginClick }) => {
  return (
    <div className="navbar">
      <div className="navbar-logo">My Website</div>
      <div className="navbar-menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div className='navbar-btns'>
        <button className="navbar-btn" onClick={onSignUpClick}>Sign Up</button>
        <button className="navbar-btn" onClick={onLoginClick}>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
