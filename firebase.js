// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZrzgujdwKSCkRKi8rYSgFv-SPnj4ebIA",
  authDomain: "fir-auth-e1427.firebaseapp.com",
  projectId: "fir-auth-e1427",
  storageBucket: "fir-auth-e1427.appspot.com",
  messagingSenderId: "587549092187",
  appId: "1:587549092187:web:7c3b08963336bde900927e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
