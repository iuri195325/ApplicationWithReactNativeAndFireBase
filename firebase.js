// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV3e5MM9qC0EbHcRGIALAPL4k0HsBHMmE",
  authDomain: "reactproject-d21fd.firebaseapp.com",
  projectId: "reactproject-d21fd",
  storageBucket: "reactproject-d21fd.appspot.com",
  messagingSenderId: "698913339956",
  appId: "1:698913339956:web:12e686c6fa2fa2284a6861",
  measurementId: "G-QK99GKKQ35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);