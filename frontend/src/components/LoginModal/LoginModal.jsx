import React, { useState } from "react";
import "./LoginModal.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginModal = ({ onClose, onSignUpClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const [isLoggingIn, setIsLoggingIn] = useState(false); // State for loading status

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError(""); // Clear previous error messages
    setIsLoggingIn(true); // Set loading state to disable button

    const auth = getAuth(); // Initialize Firebase authentication

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User Logged In:", user); // Optional: Log user details
        setIsLoggingIn(false); // Reset loading state
        onClose(); // Close modal after successful login
      })
      .catch((error) => {
        const errorMessage =
          error.code === "auth/user-not-found" || error.code === "auth/wrong-password"
            ? "Invalid credentials. Please try again."
            : "Failed to login. Please check your network and try again.";
        setError(errorMessage); // Show appropriate error message
        console.error("Login Error:", error.code, error.message); // Log error details
        setIsLoggingIn(false); // Reset loading state
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose} disabled={isLoggingIn}>
          ×
        </button>
        <h2 className="modal-title">Login</h2>
        <form className="modal-form" onSubmit={handleLogin}>
          <label className="modal-label" htmlFor="email">
            Email:
          </label>
          <input
            className="modal-input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="modal-label" htmlFor="password">
            Password:
          </label>
          <input
            className="modal-input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="modal-button" type="submit" disabled={isLoggingIn}>
            {isLoggingIn ? "Logging in..." : "Login"}
          </button>
          {error && <p className="modal-error">{error}</p>} {/* Display error message */}
        </form>
        <p className="modal-text">
          Don't have an account?
          <span
            className="modal-signup"
            onClick={onSignUpClick}
            style={{
              color: "#bb86fc",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {" "}
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
