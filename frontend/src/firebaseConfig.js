// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4EMp9_d9OHdk1916gkQXkO_sthuxe2Mc",
  authDomain: "journalhub-486e5.firebaseapp.com",
  databaseURL: "https://journalhub-486e5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "journalhub-486e5",
  storageBucket: "journalhub-486e5.appspot.com",
  messagingSenderId: "313671108824",
  appId: "1:313671108824:web:31e7683b32a01c42aaefad",
  measurementId: "G-NMR4GD175T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Log to confirm initialization
console.log("Firebase initialized:", app);
console.log("Firestore and Storage references established.");

export { db, auth };