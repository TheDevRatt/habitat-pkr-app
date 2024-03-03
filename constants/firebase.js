import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";





import {verifyUser} from './classes/User.js';
//addUser("bradygibson@trentu.ca", "Password", "Brady", "Gibson", 1234567890, 25, "he/him");

//import {signinUser} from './classes/User.js';

//async function userSignin(email, password){
    //await signinUser(email, password);
//}
//userSignin("bradygibson@trentu.ca", "password");
 //"Brady", "Gibson"

const auth = getAuth();
const user = auth.currentUser;



//onAuthStateChanged(auth, (user) => {
  //if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    //const uid = user.uid;
    //alert("user confirmed");
    // ...
  //} else {
    // User is signed out
    // ...
  //}
//});

//user.providerData.forEach((profile) => {
    //console.log("  Email: " + profile.email);
//});

//sendEmailVerification(auth.currentUser)
            //.then(() => {
              // Email verification sent!
              // ...
            //});


import {readUser} from './classes/User.js';
//readUser("Doe");

// Code to check if user already exists by
// searching for their email, returns
// true if exists, and false if it doesn't
import {userExists} from './classes/User.js';
// The email arg should receive a string of the
// attempted account creation email



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
//}
//addUser();

//async function read(){

    // Read function for returning specific data, in this case it
    // returns any user from the collection "users" where their
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