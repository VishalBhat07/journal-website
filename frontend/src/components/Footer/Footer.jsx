import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>About Us</h3>
        <p>
          We provide a seamless solution for managing and sharing files. Our platform ensures secure file uploads and easy access for your content.
        </p>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>
        <a href="#upload">Upload File</a>
        <a href="#files">Uploaded Files</a>
        <a href="#contact">Contact Us</a>
      </div>

      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="footer-social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
