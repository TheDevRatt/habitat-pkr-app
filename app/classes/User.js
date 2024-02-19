import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, getDocs, doc, setDoc, query, where } from "firebase/firestore";

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
    //}

    // TODO update with all required data entry fields
    // Function to add a new user to the database
    async function addUser(firstName, lastName, dateOfBirth, email){
        try {
            const docRef = await addDoc(collection(db, "Users"), {
                first: firstName,
                last: lastName,
                born: dateOfBirth,
                email: email

            });
            //
            // ERASE ON RELEASE
            //
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
            }
        }
    module.exports.addUser = addUser;

    //TODO updateUser function
    //async function updateUser(){
    //}


    // Function to check if a user exists by searching
    // for their email
    async function userExists(email){

        const q = query(collection(db, "Users"), where("email", "==", email));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty){return false;}
        else{return true;}

    }
    module.exports.userExists = userExists;

    // TODO add increased functionality
    async function readUser(search){

        const q = query(collection(db, "Users"), where("last", "==", search));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {console.log(doc.id, " => ", doc.data());

        });
    }
    module.exports.readUser = readUser;