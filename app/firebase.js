// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVuRXK0tDtijz_9PWz9Y5icQU4kt7iqQw",
  authDomain: "pkrides-d3c59.firebaseapp.com",
  databaseURL: "https://pkrides-d3c59-default-rtdb.firebaseio.com",
  projectId: "pkrides-d3c59",
  storageBucket: "pkrides-d3c59.appspot.com",
  messagingSenderId: "539323902826",
  appId: "1:539323902826:web:c43816f1c18112bd369313",
  measurementId: "G-RRQCR4ZZBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);