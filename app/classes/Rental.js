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

const ONE_HOUR = 3600000;


function bookingVerification(startTime, endTime){

    let start = startTime.getTime();
    let end = endTime.getTime();

    // Check that the pickup time is not set after the drop off time
    if (start > end){
        return "Drop off cannot occur before pickup";
    }

    // Check that the pickup time is not set before the current time
    const currentDate = new Date().getTime();
    if ( start < currentDate ){
        return "Pickup cannot occur before the current time";
    }

    // Make sure the booking is for an hour or more
    if ( (end - start) <= ONE_HOUR){
        return "You cannot reserve the vehicle for less than 1 hour";
    }
    return "pass";
}


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

    let verifyTimes = bookingVerification(startTime, endTime);
    console.log(verifyTimes);
    if (verifyTimes != "pass"){ return verifyTimes; }

    let checkAvailability = await availability(carID, startTime, endTime);
    if (checkAvailability == false){ return "A reservation exists in that time"; }


    let startName = (startTime.getFullYear() + "-" +
                    (startTime.getMonth() + 1) + "-" +
                    startTime.getDate() + "-" +
                    startTime.getHours() + "-" +
                    startTime.getMinutes());

    let tripName = carID + "_" + startName;

    let userID = "";
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

    return "Booked";

}



export { reserve };