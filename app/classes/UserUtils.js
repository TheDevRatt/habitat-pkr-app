import { auth } from "@/firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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

export { getUserID, fileExists };
