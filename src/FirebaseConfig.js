// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgTgmpRMHWit8pB8zqY9fsigz9ZgbPLqs",
  authDomain: "react-const-and-bootstrap.firebaseapp.com",
  projectId: "react-const-and-bootstrap",
  storageBucket: "react-const-and-bootstrap.appspot.com",
  messagingSenderId: "900590629005",
  appId: "1:900590629005:web:25590afdc04d20071d32c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authorization = getAuth(app);