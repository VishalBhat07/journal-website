//config.js
import { initializeApp } from "firebase/app";

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

export default app;
