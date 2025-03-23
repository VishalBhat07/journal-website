import React, { useContext, useState } from "react";
import "../LoginModal/LoginModal.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../AppContext";

const SignUpModal = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const { setUser } = useContext(UserContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        toast.success("Sign Up Successful!");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Sign Up Error:", errorCode, errorMessage);
        toast.error(errorMessage);
      })
      .finally(() => {
        setIsLoading(false); // Reset loading state
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={() => navigate("/")}>
          ×
        </button>
        <h2 className="modal-title">Sign Up</h2>
        <form className="modal-form" onSubmit={handleSignUp}>
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

          <button className="modal-button" type="submit" disabled={isLoading}>
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <p className="modal-text">
          Already have an account?
          <span className="modal-login" onClick={() => navigate("/login")}>
            {" "}
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpModal;
