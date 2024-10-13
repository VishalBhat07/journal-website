// LoginModal.js
import React, { useState } from 'react';
import './LoginModal.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginModal = ({ onClose, onSignUpClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();  // Prevent default form submission behavior
  
    const auth = getAuth();  // Initialize Firebase authentication
  
    // Use Firebase createUserWithEmailAndPassword method
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log('User Logged In:', user);  // Log user details if needed
  
        onClose();  // Close the modal after successful sign up (optional)
      })
      .catch((error) => {
        // Handle sign-up errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Sign Up Error:', errorCode, errorMessage);  // Log error details
        alert("Invalid credentials");
      });
  
    console.log('Login in:', { email, password });  // Debugging: log form inputs
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? 
          <span onClick={onSignUpClick} style={{ cursor: 'pointer', color: '#bb86fc' }}> Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
