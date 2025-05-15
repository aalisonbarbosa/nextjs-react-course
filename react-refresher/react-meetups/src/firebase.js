// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBsEAeBk-h0fU0Ii-wMK4HOrJuZUD73Xk",
  authDomain: "react-getting-started-b3cb7.firebaseapp.com",
  projectId: "react-getting-started-b3cb7",
  storageBucket: "react-getting-started-b3cb7.firebasestorage.app",
  messagingSenderId: "565345492810",
  appId: "1:565345492810:web:821e753b68d50ac1026bb3",
  measurementId: "G-YTKGHV0SVL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
