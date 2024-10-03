// SignUpModal.js
import React, { useState } from 'react';
import './SignUpModal.css';

const SignUpModal = ({ onClose, onLoginClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Sign Up:', { email, password });
    onClose(); // Close the modal after sign up (optional)
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? 
          <span onClick={onLoginClick} style={{ cursor: 'pointer', color: '#bb86fc' }}> Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignUpModal;
