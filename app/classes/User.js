import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
    getAuth,
    createUserWithEmailAndPassword,
    getReactNativePersistence,
    initializeAuth,
    sendEmailVerification,
    signInWithEmailAndPassword
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
import { getStorage, ref, uploadBytes} from "firebase/storage";
import { AsyncStorage } from "@react-native-async-storage/async-storage";

const NAME_MAX = 30;

    export const firebaseConfig = {
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
    export const auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
    const storage = getStorage();

    async function verifyUser(email, password, firstName, lastName, phoneNumber, age, pronouns){

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



        // Age



        // Pronouns

        // Check that pronouns is not empty
        if (pronouns = ""){
            return "Please select your pronouns";
        }

        await addUser(email, password, firstName, lastName, phoneNumber, age, pronouns)
        return "good";
    }
    module.exports.verifyUser = verifyUser;



    // Add user to firebase function
    async function addUser(email, password, firstName, lastName, phoneNumber, age, pronouns){

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
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
            const docRef = await addDoc(collection(db, "users"),{

                FirstName: firstName,
                LastName: lastName,
                Email: email,
                Phone: phoneNumber,
                Age: age,
                Pronouns: pronouns,
                Approved: false
            });
            } catch (e) {

            }
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
        const auth = getAuth();
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
        if(user.emailVerified == true){
            return "email";
        }

        // User signed in and verified
        return "good";
    }
    module.exports.signinUser = signinUser;

    async function addLicence(file){

        // Create a reference to 'licence.jpg'
        const licenceRef = ref(storage, 'licence.jpg');

        // 'file' comes from the Blob or File API
        uploadBytes(licenceRef, file).then((snapshot) => {
          console.log('Uploaded a blob or file!');
        });

    }







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

    // TODO add increased functionality
    async function readUserName(email){
        const q = query(collection(db, "users"), where("Email", "==", email));
        const querySnapshot = await getDocs(q);
        return doc.data().FirstName;
    }
    module.exports.readUserName = readUserName;