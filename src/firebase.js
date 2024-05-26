// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rentify-d5f04.firebaseapp.com",
  projectId: "rentify-d5f04",
  storageBucket: "rentify-d5f04.appspot.com",
  messagingSenderId: "989513058860",
  appId: "1:989513058860:web:163a0ffac78511f0181f89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
