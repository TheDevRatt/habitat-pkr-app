import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, getDocs, doc, setDoc, query, where } from "firebase/firestore";

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
const db = getFirestore(app);


// Example for adding to the data base
// https://firebase.google.com/docs/firestore/quickstart#web-modular-api_1
//async function addUser(){
    //try {
      //const docRef = await addDoc(collection(db, "Users"), {
        //first: "John",
        //last: "Doe",
        //born: 1950
      //});
      //console.log("Document written with ID: ", docRef.id);
    //} catch (e) {
      //console.error("Error adding document: ", e);
//}
//addUser();

//import User from './classes/User.js';
//var user = new User()
//async function read(){

    // Read function for returning specific data, in this case it
    // returns any user from the collection users where their
    // first name is equal to jane

    //const q = query(collection(db, "Users"), where("first", "==", "Jane"));
    //const querySnapshot = await getDocs(q);
    //querySnapshot.forEach((doc) => {console.log(doc.id, " => ", doc.data());


    // Read function for everything in a collection

    //const querySnapshot = await getDocs(collection(db, "Users"));
    //querySnapshot.forEach((doc) => {console.log(doc.id, " => ", doc.data());

    //});

//}
//read();