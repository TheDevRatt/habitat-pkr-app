import { auth } from "@/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { signOut } from "firebase/auth";

const storage = getStorage();

// Moved getUserID here from User.js
async function getUserID() {
  const user = auth.currentUser;
  return user ? user.uid : null;
}

// Check if a file exists
async function fileExists(fileName, location) {
  const filepath = location + "/" + fileName;
  //console.log(filepath);
  const docRef = ref(storage, filepath);
  try {
    await getDownloadURL(docRef);
    return true;
  } catch (e) {
    return false;
  }
}

async function signOutUser() {
  try {
    await signOut(auth);
    // Sign-out successful.
    // Redirection or further actions should be handled in the component where this function is called
  } catch (error) {
    // An error happened during sign-out
    console.error("Error signing out: ", error);
    // You can return false here or throw an error depending on how you want to handle errors
    throw error;
  }
}

export { getUserID, fileExists, signOutUser };
