import React from 'react';
import './QuickLinks.css'; // Make sure to create a CSS file for styles

const QuickLinks = () => {
  return (
    <div className="quick-links">
      <h2>Quick Links</h2>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
