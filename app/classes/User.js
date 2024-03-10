import { getFirestore } from 'firebase/firestore';
import {
    getAuth,
    createUserWithEmailAndPassword,
    getReactNativePersistence,
    initializeAuth,
    sendEmailVerification,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged
    } from 'firebase/auth';
import {
    collection,
    addDoc,
    getDocs,
    doc,
    setDoc,
    query,
    where
    } from "firebase/firestore";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";

import { app, db,
auth
} from '@/firebase';

const NAME_MAX = 30;

    async function verifyUser(email, password, firstName, lastName, phoneNumber, pronouns){

        // Check first name input

        // Check that a first name has been entered
        if(firstName == ""){
            return "Please enter a first name";
        }

        // Check that first name contains only letters
        for (const char of firstName) {
            if (!(char >= "a" && char <= "z") &&
                !(char >= "A" && char <= "Z")) {
                return "First name must contain only letters";
                }
        }
        // Check that first name is under character limit
        if (firstName.length > NAME_MAX){
            return "First name contains too many characters";
        }



        // Check last name input

        // Check that a first name has been entered
        if(lastName == ""){
            return "Please enter a last name";
        }
        // Check that last name contains only letters
        for (const char of lastName) {
            if (!(char >= "a" && char <= "z") &&
                !(char >= "A" && char <= "Z")) {
                return "Last name must contain only letters";
                }
        }
        // Check that last name is under character limit
        if (lastName.length > NAME_MAX){
            return "last name contains too many characters";
        }



        // Email

        // Verify email input
        var validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!(email.match(validEmailFormat))){
            return "Please enter a valid email";
        }

        // Check that user doesn't already exist by email
        let v;
        try{
            v = await userExists(email);
        } catch(e){
            return "An error has occurred";
        }
        if (v == true){
            return "A user with this email already exists";
        }



        // Password

        // Password 7 to 15 characters with at least one letter and one special character
        var passwordFormat =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if(!(password.match(passwordFormat))){
            return "Password must be 7 to 15 characters with at least one letter and one special character"
        }



        // Phone number

        // Check that the phone number entered is a valid format
        var phoneNumberFormat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        if(!(phoneNumber.match(phoneNumberFormat))){
            return "Please a valid 10-digit phone number";
        }

        // Check that pronouns is not empty
        if (pronouns = ""){
            return "Please select your pronouns";
        }

        await addUser(email, password, firstName, lastName, phoneNumber, pronouns)
        return "good";
    }
    module.exports.verifyUser = verifyUser;



    // Add user to firebase function
    async function addUser(email, password, firstName, lastName, phoneNumber, pronouns){
        let user;
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            user = userCredential.user;
            sendEmailVerification(auth.currentUser)
              .then(() => {
                // Email verification sent
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
        try{
            user = auth.currentUser;
            await setDoc(doc(db, "users", user.uid),{
                FirstName: firstName,
                LastName: lastName,
                Email: email,
                Phone: phoneNumber,
                Pronouns: pronouns,
                Approved: false
            });
            } catch (e) {

            }
        updateProfile(auth.currentUser, {
          displayName: firstName }).then(() => {
          // Username updated
        }).catch((error) => {
          // An error occurred
        });

    }
    module.exports.addUser = addUser;



    // User sign in
    async function signinUser(email, password){

        // Check that a user account exists with the entered email
        // if not, return error
        let v;
        try{
            v = await userExists(email);
        } catch(e){
            return "An error has occurred";
        }
        if (v == false){
            return "Incorrect email or password";
        }

        // Sign in the user
        try{
            await signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
              });
        }catch(e){
            return "An error has occurred";
        }

        // Check that the email for the user has been verified
        const user = auth.currentUser;
        if(user.emailVerified == false){
            return "email";
        }

        // User signed in and verified
        return "good";
    }
    module.exports.signinUser = signinUser;


    async function userID(){
        const user = auth.currentUser;
        return user.uid;
    }
    module.exports.userID = userID;





    //const router = useRouter();
    //async function userState(){
        //onAuthStateChanged(auth, (user) => {
          //if (user) {
            //const uid = user.uid;
          //} else {
            //router.push("/onboarding/logIn");
          //}
        //});
    //}
   //module.exports.userState = userState;

    //TODO updateUser function
    //async function updateUser(){
    //}


    // Function to check if a user exists by searching
    // for their email
    async function userExists(email){

        const q = query(collection(db, "users"), where("Email", "==", email));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty){return false;}
        else{return true;}

    }
    module.exports.userExists = userExists;

    // Return current users first name
    async function readUserName(email){
        const q = query(collection(db, "users"), where("Email", "==", email));
        const querySnapshot = await getDocs(q);
        return doc.data().FirstName;
    }
    module.exports.readUserName = readUserName;