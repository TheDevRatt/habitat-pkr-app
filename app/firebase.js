

import {addUser} from './classes/User.js';
//addUser("Tim", "Drake", 1990,"a@b.com");

import {readUser} from './classes/User.js';
//readUser("Doe");

// Code to check if user already exists by
// searching for their email, returns
// true if exists, and false if it doesn't
import {userExists} from './classes/User.js';
// The email arg should receive a string of the
// attempted account creation email

var test;
async function checkEmail(email){
    let v;
    try{
        v = await userExists(email);
    } catch(e){
    alert("Error connecting to database")
    }
    if (v == true){
        alert("Email already in use")
    }
    }

checkEmail("a@b.com");

//async function emailVerifyTest(){

    //await checkEmail("a@c.com");
    //if(test == false){
    //console.log("false");
    //}
    //else{console.log("true")}
//}
//emailVerifyTest();


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