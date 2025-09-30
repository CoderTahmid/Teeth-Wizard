// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwRzDR8JOQDrgooEURJr7eE8MC8wQtlZ8",
  authDomain: "teeth-wizard-c22ba.firebaseapp.com",
  projectId: "teeth-wizard-c22ba",
  storageBucket: "teeth-wizard-c22ba.firebasestorage.app",
  messagingSenderId: "486718024299",
  appId: "1:486718024299:web:e0b81dd867c3c24f721f2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);