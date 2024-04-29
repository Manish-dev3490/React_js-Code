// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqy-xZD874sJjVu8IkRSggDVlV7SamOsE",
  authDomain: "netflix-gpt-273bb.firebaseapp.com",
  projectId: "netflix-gpt-273bb",
  storageBucket: "netflix-gpt-273bb.appspot.com",
  messagingSenderId: "390116949532",
  appId: "1:390116949532:web:72a0a9572acf74c8d629d9",
  measurementId: "G-0KDYL992K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);