import React, { useState } from 'react';
import '../LoginModal/LoginModal.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpModal = ({ onClose, onLoginClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User Signed Up:', user); // Log user details
        console.log('Sign Up Successful!'); // Print a success message in the console
        alert('Sign Up Successful!');
        onClose();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Sign Up Error:', errorCode, errorMessage);
        alert(errorMessage);
      })
      .finally(() => {
        setIsLoading(false); // Reset loading state
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="modal-title">Sign Up</h2>
        <form className="modal-form" onSubmit={handleSignUp}>
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

          <button className="modal-button" type="submit" disabled={isLoading}>
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        <p className="modal-text">
          Already have an account? 
          <span className="modal-login" onClick={onLoginClick}> Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignUpModal;
