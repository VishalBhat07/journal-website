// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const db = getFirestore(app);
const auth = getAuth(app);

// Log to confirm initialization
console.log("Firebase initialized:", app);
console.log("Firestore and Storage references established.");

export { db, auth };