// SignUpModal.js
import React, { useState } from 'react';
import './SignUpModal.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const SignUpModal = ({ onClose, onLoginClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();  // Prevent default form submission behavior
  
    const auth = getAuth();  // Initialize Firebase authentication
  
    // Use Firebase createUserWithEmailAndPassword method
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log('User Signed Up:', user);  // Log user details if needed
  
        onClose();  // Close the modal after successful sign up (optional)
      })
      .catch((error) => {
        // Handle sign-up errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Sign Up Error:', errorCode, errorMessage);  // Log error details
      });
  
    console.log('Sign Up:', { email, password });  // Debugging: log form inputs
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
