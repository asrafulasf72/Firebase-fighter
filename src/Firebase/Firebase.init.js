// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrryNH2gA_EN4c6dqT2TsN9ByajcCFMHU",
  authDomain: "fir-fighter-e5397.firebaseapp.com",
  projectId: "fir-fighter-e5397",
  storageBucket: "fir-fighter-e5397.firebasestorage.app",
  messagingSenderId: "780555209999",
  appId: "1:780555209999:web:bbd2512b1a62edc121427a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);