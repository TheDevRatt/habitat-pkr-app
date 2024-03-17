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
import { Link, useRouter } from "expo-router";
import { db, auth } from "@/firebase";





//////// TESTING //////////////

// Date( year, month, day, hour, minute)
const start = new Date(2024, 2, 9, 6, 0);
const end = new Date(2024, 2, 9, 20, 0);

const TcarID = 'toyotacorolla2018';
const TstartTime = start;
const TendTime = end;

//////////////////////////////



// Check if a reservation starts or ends in the attempted booking
// and check if the attempted reservation would occur inside a
// booked reservation
async function availability(carID, startTime, endTime){

    const start = startTime.getTime();
    const end = endTime.getTime();

    let reserve = true;

    const q = query(collection(db, "reservations"), where("CarID", "==", carID));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        let bookedStart = doc.data().StartTime.toDate().getTime();
        let bookedEnd = doc.data().EndTime.toDate().getTime();

        if(
            ((
            start >= bookedStart &&
            start <= bookedEnd)||
            (
            end >= bookedStart &&
            end <= bookedEnd))||
            ((
            bookedStart <= start &&
            bookedEnd >= end))||
            (
            bookedStart >= start &&
            bookedEnd <= end))
            {
            reserve = false;
            }
    });

    return reserve;
}

// Function to upload reservation to database
async function reserve(carID, startTime, endTime){

    let checkAvailability = await availability(carID, startTime, endTime);
    if (checkAvailability == false){
        return "A reservation exists in that time";}

    let startName = (startTime.getFullYear() + "-" +
                    (startTime.getMonth() + 1) + "-" +
                    startTime.getDate() + "-" +
                    startTime.getHours() + "-" +
                    startTime.getMinutes());

    let tripName = carID + "_" + startName;

    let userID = "placeholder";
    let user = auth.currentUser;
    if(user !== null){
        userID = user.uid;
    }

    // Convert reserved time to hours
    let reservedTime = (endTime.getTime() - startTime.getTime())/3600000;

    try{
        await setDoc(doc(db, "reservations", tripName), {
            CarID: carID,
            UserID: userID,
            StartTime: startTime,
            EndTime: endTime,
            TotalTime: reservedTime,
        });
    } catch(e){
        alert(e);
    }

    return "Booked!";

}


async function test(){
    let book = await reserve(TcarID, TstartTime, TendTime);
    console.log(book);
}

//test();

async function pickup(reservation){















}