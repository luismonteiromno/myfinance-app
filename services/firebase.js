// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASEapiKey,
  authDomain: process.env.FIREBASEauthDomain,
  projectId: process.env.FIREBASEprojectId,
  storageBucket: process.env.FIREBASEstorageBucket,
  messagingSenderId: process.env.FIREBASEmessagingSenderId,
  appId: process.env.FIREBASEappId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app);

export default {app, db};