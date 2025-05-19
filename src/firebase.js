// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBsBpwyZjCklVHWP9TuuLo7rdXi9W85mak",
  authDomain: "clone-32a50.firebaseapp.com",
  projectId: "clone-32a50",
  storageBucket: "clone-32a50.firebasestorage.app",
  messagingSenderId: "997702426934",
  appId: "1:997702426934:web:f8f4a24ac002746a535397",
  measurementId: "G-5DNM4GC3D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider()