// firebase/config.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr2JKb6O2hQS7jPRVhzdxIJv728OoqGuw",
  authDomain: "fir-ebff3.firebaseapp.com",
  projectId: "fir-ebff3",
  storageBucket: "fir-ebff3.appspot.com",
  messagingSenderId: "43023766804",
  appId: "1:43023766804:web:216d6d6529ab861b511e01",
  measurementId: "G-PS7X48HR0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
