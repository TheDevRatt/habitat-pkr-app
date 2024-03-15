import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  getReactNativePersistence,
  initializeAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail as firebaseSendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  setDoc,
  query,
  where,
} from "firebase/firestore";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";
import { fileExists } from "./UserUtils";

import { db, auth } from "@/firebase";

const NAME_MAX = 30;

async function verifyUser(
  email,
  password,
  firstName,
  lastName,
  phoneNumber,
  pronouns,
  age
) {
  // Check first name input

  // Check that a first name has been entered
  if (firstName == "") {
    return "Please enter a first name";
  }

  // Check that first name contains only letters
  for (const char of firstName) {
    if (!(char >= "a" && char <= "z") && !(char >= "A" && char <= "Z")) {
      return "First name must contain only letters";
    }
  }
  // Check that first name is under character limit
  if (firstName.length > NAME_MAX) {
    return "First name contains too many characters";
  }

  // Check last name input

  // Check that a first name has been entered
  if (lastName == "") {
    return "Please enter a last name";
  }
  // Check that last name contains only letters
  for (const char of lastName) {
    if (!(char >= "a" && char <= "z") && !(char >= "A" && char <= "Z")) {
      return "Last name must contain only letters";
    }
  }
  // Check that last name is under character limit
  if (lastName.length > NAME_MAX) {
    return "last name contains too many characters";
  }

  // Email

  // Verify email input
  var validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(validEmailFormat)) {
    return "Please enter a valid email";
  }

  // Check that user doesn't already exist by email
  let v;
  try {
    v = await getUserExists(email);
  } catch (e) {
    return "An error has occurred";
  }
  if (v == true) {
    return "A user with this email already exists";
  }

  // Password

  // Password 7 to 15 characters with at least one letter and one special character
  var passwordFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  if (!password.match(passwordFormat)) {
    return "Password must be 7 to 15 characters with at least one letter and one special character";
  }

  // Phone number

  // Check that the phone number entered is a valid format
  var phoneNumberFormat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  if (!phoneNumber.match(phoneNumberFormat)) {
    return "Please a valid 10-digit phone number";
  }

  // Check that pronouns is not empty
  console.log(pronouns);
  if (pronouns == "") {
    return "Please select your pronouns";
  }

  // Check that age is not empty
  if (age == "") {
    return "Please enter your age";
  }
  // Check that age is a valid number
  if (isNaN(age)) {
    return "Please enter a valid age";
  }

  await addUser(
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    pronouns,
    age
  );
  return "good";
}

// Add user to firebase function
async function addUser(
  email,
  password,
  firstName,
  lastName,
  phoneNumber,
  pronouns,
  age
) {
  let user;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      user = userCredential.user;
      sendEmailVerification(auth.currentUser).then(() => {
        // Email verification sent
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  try {
    user = auth.currentUser;
    await setDoc(doc(db, "users", user.uid), {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Phone: phoneNumber,
      Pronouns: pronouns,
      Age: age,
      Approved: false,
      isAdmin: false,
    });
  } catch (e) {}
  updateProfile(auth.currentUser, {
    displayName: firstName,
  })
    .then(() => {
      // Username updated
    })
    .catch((error) => {
      // An error occurred
    });
}

// User sign in
async function signinUser(email, password) {
  // Check that a user account exists with the entered email
  // if not, return error
  let v;
  try {
    v = await getUserExists(email);
  } catch (e) {
    return "An error has occurred";
  }
  if (v == false) {
    return "Incorrect email or password";
  }

  // Sign in the user
  try {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        throw new Error("Incorrect email or password");
      });
  } catch (e) {
    return e.message;
  }

  // Check that the email for the user has been verified
  const user = auth.currentUser;
  if (user.emailVerified == false) {
    return "email";
  }

  // Check if user has submitted both their license and insurance,
  // if not they will be redirected to basic info to submit it
  let lic = await fileExists(
    user.uid,
    "gs://pkrides-d3c59.appspot.com/License"
  );
  let ins = await fileExists(
    user.uid,
    "gs://pkrides-d3c59.appspot.com/Insurance"
  );
  if (lic == false || ins == false) {
    return "basicinfo";
  }

  // User signed in and verified
  return "good";
}

// Return user ID
async function getUserID() {
  const user = auth.currentUser;
  return user.uid;
}

async function getUserVerified(email) {
  const q = query(collection(db, "users"), where("Email", "==", email));
  const querySnapshot = await getDocs(q);
  return doc.data().Approved;
}

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

//TODO updateUser function
//async function updateUser(){
//}

// Function to check if a user exists by searching
// for their email
async function getUserExists(email) {
  const q = query(collection(db, "users"), where("Email", "==", email));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    return false;
  } else {
    return true;
  }
}

// Return current users first name
async function readUserName(email) {
  const q = query(collection(db, "users"), where("Email", "==", email));
  const querySnapshot = await getDocs(q);
  return doc.data().FirstName;
}

// Return user ID and image URLs
async function getUserData() {
  const user = auth.currentUser;
  const userDocRef = doc(getFirestore(), "users", auth.currentUser.uid);
  const userDoc = await getDoc(userDocRef);
  if (userDoc.exists()) {
    const userData = userDoc.data();
    return {
      uid: auth.currentUser.uid,
      licenseUrl: userData.licenseUrl,
      insuranceUrl: userData.insuranceUrl,
    };
  } else {
    console.error("No such document!");
  }
}

// Send password reset email
async function passwordReset(email) {
  try {
    await firebaseSendPasswordResetEmail(getAuth(), email);
    return "Password reset email sent successfully.";
  } catch (error) {
    throw error; // You might want to handle this more gracefully in a real app
  }
}

export {
  verifyUser,
  addUser,
  signinUser,
  getUserID,
  getUserVerified,
  getUserExists,
  readUserName,
  getUserData,
  passwordReset,
};
