// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-mana-estate.firebaseapp.com",
  projectId: "mern-mana-estate",
  storageBucket: "mern-mana-estate.appspot.com",
  messagingSenderId: "874053992356",
  appId: "1:874053992356:web:95850607fda71c27a3cb31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);