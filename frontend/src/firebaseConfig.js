// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuAs7bNqzYeNfd9xzNYLAw9kJnR-cnYfo",
  authDomain: "journalwebsite-d9720.firebaseapp.com",
  projectId: "journalwebsite-d9720",
  storageBucket: "journalwebsite-d9720.appspot.com",
  messagingSenderId: "659012873967",
  appId: "1:659012873967:web:097591c634f8b3d40ef51a",
  measurementId: "G-4PHQTFK0LG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Pass the app instance to getAuth
const db = getFirestore(app);

export { auth, db }; // Export auth and db
