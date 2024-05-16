// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUotSwzC4YJwVsrW9Rkk6QHXdmx2LCIts",
  authDomain: "house-1102b.firebaseapp.com",
  projectId: "house-1102b",
  storageBucket: "house-1102b.appspot.com",
  messagingSenderId: "694637103613",
  appId: "1:694637103613:web:195dd7b9ebfae9ccb77194",
  measurementId: "G-05YMBP8SQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
