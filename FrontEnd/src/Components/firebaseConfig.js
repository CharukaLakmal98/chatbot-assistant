// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmuK5gFP-rK5c4TdouSsqN06Xt7gUIJdY",
  authDomain: "ai-chatbot-6948d.firebaseapp.com",
  projectId: "ai-chatbot-6948d",
  storageBucket: "ai-chatbot-6948d.appspot.com",
  messagingSenderId: "190653163883",
  appId: "1:190653163883:web:256c32d7204b031757442e",
  measurementId: "G-5QWEDRYVXY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
