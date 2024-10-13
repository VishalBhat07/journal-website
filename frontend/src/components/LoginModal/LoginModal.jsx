import React, { useState } from 'react';
import './LoginModal.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginModal = ({ onClose, onSignUpClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    const auth = getAuth(); // Initialize Firebase authentication

    // Use Firebase signInWithEmailAndPassword method
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Logged in successfully
        const user = userCredential.user;
        console.log('User Logged In:', user); // Log user details if needed
        alert('Login Successful!'); // Alert for successful login
        onClose(); // Close the modal after successful login
      })
      .catch((error) => {
        // Handle login errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Login Error:', errorCode, errorMessage); // Log error details
        alert("Invalid credentials. Please try again."); // Alert for invalid credentials
      });

    console.log('Logging in:', { email, password }); // Debugging: log form inputs
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="modal-title">Login</h2>
        <form className="modal-form" onSubmit={handleLogin}>
          <label className="modal-label" htmlFor="email">Email:</label>
          <input
            className="modal-input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="modal-label" htmlFor="password">Password:</label>
          <input
            className="modal-input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="modal-button" type="submit">Login</button>
        </form>
        <p className="modal-text">
          Don't have an account? 
          <span className="modal-signup" onClick={onSignUpClick} style={{
              color: '#bb86fc', // Purple color for the Sign Up text
              textDecoration: 'underline', // Underline for visibility
              cursor: 'pointer' // Pointer cursor on hover
            }}> Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
