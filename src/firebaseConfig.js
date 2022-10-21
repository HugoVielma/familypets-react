// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhnd4KOvDUsGaWO9cYu86vDag08XRSqLo",
  authDomain: "familypets-react.firebaseapp.com",
  projectId: "familypets-react",
  storageBucket: "familypets-react.appspot.com",
  messagingSenderId: "231367141992",
  appId: "1:231367141992:web:aaad92e95905771ff269dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
