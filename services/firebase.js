
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATxXQRJ2lmU3vQRi3ZPcLKNVawJJumzqQ",
  authDomain: "app-my-finance-f7881.firebaseapp.com",
  projectId: "app-my-finance-f7881",
  storageBucket: "app-my-finance-f7881.firebasestorage.app",
  messagingSenderId: "334497719351",
  appId: "1:334497719351:web:70ce36f5324a6abf350bb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

export { auth, db };