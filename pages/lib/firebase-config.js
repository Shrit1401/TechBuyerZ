// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANr0z_QXhUFe-3WgqKI5eGMJezDLY29l0",
  authDomain: "techbuyerz.firebaseapp.com",
  projectId: "techbuyerz",
  storageBucket: "techbuyerz.appspot.com",
  messagingSenderId: "517850361271",
  appId: "1:517850361271:web:3a6947a6706418cbb84c32",
  measurementId: "G-ZTWVQKNJ6Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db, app };
