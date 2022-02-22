// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCY7s16xVSXelsxaYFML9Xdg735YUGnIRY",
  authDomain: "clone1-83bd4.firebaseapp.com",
  projectId: "clone1-83bd4",
  storageBucket: "clone1-83bd4.appspot.com",
  messagingSenderId: "76581835677",
  appId: "1:76581835677:web:aeabd6b9e20f5add72d574",
  measurementId: "G-FMESGH2SD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firestore
export const db = getFirestore(app);

// auth
export const auth = getAuth()