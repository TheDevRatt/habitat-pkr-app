import { db, auth } from "@/firebase";
import {  collection,
          addDoc,
          getDocs,
          getDoc,
          doc,
          setDoc,
          query,
          where, } from "firebase/firestore";
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

async function test(){
    console.log("test");
    let testR = await fetchReservations();
    console.log(testR);

}

//test();


export { getUserID, fileExists, fetchReservations };
