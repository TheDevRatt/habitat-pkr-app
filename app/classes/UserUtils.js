import { db, auth } from "@/firebase";
import {  getFirestore,
          collection,
          addDoc,
          getDocs,
          getDoc,
          doc,
          setDoc,
          query,
          where,
          updateDoc,
          } from "firebase/firestore";
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

async function fetchReservations(){
    let reservations;
    await getDocs(collection(db, "reservations"))
        .then((querySnapshot)=>{
            reservations = querySnapshot.docs
                .map((doc) => ({
                CarID: doc.data().CarID,
                UserID: doc.data().UserID,
                StartTime: doc.data().StartTime,
                EndTime: doc.data().EndTime,
                }));
    console.log(reservations);
    })
    return reservations;
    }

async function fetchVehicles(){

    const q = query(collection(db, "vehicles"), where("Status", "==", true));
    const querySnapshot = await getDocs(q);
    const vehicles = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        DayRate: doc.data().DayRate,
        Capacity: doc.data().Capacity,
        GasMileage: doc.data().GasMileage,
        HourlyRate: doc.data().HourlyRate,
        Make: doc.data().Make,
        Model: doc.data().Model,
        Status: doc.data().Status,
        Transmission: doc.data().Transmission,
        Year: doc.data().Year,
        imageURL: doc.data().imageURL,
    }));
    return vehicles
}


async function fetchUserReservations(){

    let userID = await getUserID();
    const q = query(collection(db, "reservations"), where("UserID", "==", userID));
    const querySnapshot = await getDocs(q);
    const userReservations = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        CarID: doc.data().CarID,
        UserID: doc.data().UserID,
        StartTime: doc.data().StartTime,
        EndTime: doc.data().EndTime,
        TotalTime: doc.data().TotalTime,
        Cost: doc.data().Cost,
        Active: doc.data().Active,
        Created: doc.data().Created,
        InProgress: doc.data().InProgress
    }));
    return userReservations
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

// Function to fetch unapproved users
async function fetchUnapprovedUsers() {
  const q = query(collection(db, "users"), where("Approved", "==", false));
  const querySnapshot = await getDocs(q);
  const users = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    FirstName: doc.data().FirstName,
    LastName: doc.data().LastName,
    //Email: doc.data().Email,
  }));
  return users;
}

const approveUser = async (userId) => {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
    Approved: true,
  });
};

export {
  getUserID,
  fileExists,
  signOutUser,
  fetchUnapprovedUsers,
  approveUser,
  fetchReservations,
  fetchVehicles,
  fetchUserReservations
};
