// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsUZrjCk1f4LmWH1b3CEY2Au3UcHp1XCo",
  authDomain: "mi-commerce-talentotech.firebaseapp.com",
  projectId: "mi-commerce-talentotech",
  storageBucket: "mi-commerce-talentotech.firebasestorage.app",
  messagingSenderId: "56564245726",
  appId: "1:56564245726:web:52067fe5c1ffdb94ff4e4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getFirestore } from "firebase/firestore";
export const db = getFirestore(app)