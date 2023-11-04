// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA5pw-2xx62kn43d7ybKA2YITykOt9AgY",
  authDomain: "study-buddy-1db4a.firebaseapp.com",
  projectId: "study-buddy-1db4a",
  storageBucket: "study-buddy-1db4a.appspot.com",
  messagingSenderId: "187637355477",
  appId: "1:187637355477:web:8a455848808eac08efa35c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);