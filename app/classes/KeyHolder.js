import { auth, db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

// Check if a user is a keyholder
async function isKeyholder(uid) {
  const userDocRef = doc(db, "users", uid);
  const userDoc = await getDoc(userDocRef);
  if (userDoc.exists()) {
    const userData = userDoc.data();
    return userData.isKeyholder;
  } else {
    throw new Error("User document does not exist");
  }
}

// Handle keyholder-specific tasks
// Add your keyholder-specific functions here

export { isKeyholder };
