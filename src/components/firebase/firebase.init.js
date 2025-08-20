
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1VBruGc1_XVNlynXh0kP95QIqrykWwLY",
  authDomain: "auth-49c57.firebaseapp.com",
  projectId: "auth-49c57",
  storageBucket: "auth-49c57.firebasestorage.app",
  messagingSenderId: "549597242334",
  appId: "1:549597242334:web:52cc5cc4e92ea894dfb34f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 