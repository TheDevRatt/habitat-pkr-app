import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  setDoc,
  query,
  where,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { Link, useRouter } from "expo-router";
import { db, auth } from "@/firebase";

const ONE_HOUR = 3600000;

function bookingVerification(startTime, endTime) {
  let start = startTime.getTime();
  let end = endTime.getTime();

  // Check that the pickup time is not set after the drop off time
  if (start > end) {
    return "Drop off cannot occur before pickup";
  }

  // Check that the pickup time is not set before the current time
  const currentDate = new Date().getTime();
  if (start < currentDate) {
    return "Pickup cannot occur before the current time";
  }

  // Make sure the booking is for an hour or more
  if (end - start < ONE_HOUR) {
    return "You cannot reserve the vehicle for less than 1 hour";
  }
  return "pass";
}

// Check if a reservation starts or ends in the attempted booking
// and check if the attempted reservation would occur inside a
// booked reservation
async function availability(carID, startTime, endTime) {
  const start = startTime.getTime();
  const end = endTime.getTime();

  let reserve = true;

  const q = query(collection(db, "reservations"), where("Status", "==", true));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    let bookedStart = doc.data().StartTime.toDate().getTime();
    let bookedEnd = doc.data().EndTime.toDate().getTime();

    if (
      (start >= bookedStart && start <= bookedEnd) ||
      (end >= bookedStart && end <= bookedEnd) ||
      (bookedStart <= start && bookedEnd >= end) ||
      (bookedStart >= start && bookedEnd <= end)
    ) {
      reserve = false;
    }
  });

  return reserve;
}

// Function to upload reservation to database
async function reserve(carID, start, end, dayRate, hourlyRate) {
  let startTime = start;
  let endTime = end;

  startTime.setSeconds(0);
  endTime.setSeconds(0);

  let verifyTimes = bookingVerification(startTime, endTime);
  if (verifyTimes != "pass") {
    return verifyTimes;
  }

  let checkAvailability = await availability(carID, startTime, endTime);
  if (checkAvailability == false) {
    return "A reservation exists in that time";
  }

  let startName =
    startTime.getFullYear() +
    "-" +
    (startTime.getMonth() + 1) +
    "-" +
    startTime.getDate() +
    "-" +
    startTime.getHours() +
    "-" +
    startTime.getMinutes();

  let tripName = carID + "_" + startName;

  let userID = "";
  let user = auth.currentUser;
  if (user !== null) {
    userID = user.uid;
  }

  // Convert reserved time to hours
  let reservedTime = (endTime.getTime() - startTime.getTime()) / 3600000;
  reservedTime = Math.round(reservedTime * 100) / 100;

  // Calculate cost
  let cost = 0;
  let rTime = reservedTime;
  while (rTime > 0) {
    if (rTime > 24) {
      cost += dayRate;
      rTime -= 24;
    } else if (rTime >= 0.5) {
      cost += hourlyRate * Math.ceil(rTime);
      rTime -= rTime;
    }
  }

  console.log(cost);

  // Upload reservation
  try {
    await setDoc(doc(db, "reservations", tripName), {
      CarID: carID,
      UserID: userID,
      StartTime: startTime,
      EndTime: endTime,
      TotalTime: reservedTime,
      Cost: cost,
      Active: true,
      Created: new Date(),
      InProgress: false,
    });
  } catch (e) {
    return e;
  }

  // Add reservation to user reservation list, delete reservation
  // if an error occurs
  //let res = await userReservations(userID, tripName, startTime);
  //if (res == false){
  //console.log("here");
  //try{
  //await deleteDoc(doc(db, "reservations", tripName));
  //}catch(e){
  //return e;
  //}
  //return "An error has occurred";
  //}

  return "Booked";
}

// function to add reservation name and time to user reservation list
async function userReservations(userID, reservationID, startTime) {
  const userDoc = await getDoc(doc(db, "users", userID));

  try {
    if (userDoc.exists()) {
      if (userDoc.data().Reservations) {
        const res = userDoc.data().Reservations;
        res[reservationID] = startTime.getTime();

        const userDocRef = doc(db, "users", userID);
        await updateDoc(userDocRef, {
          Reservations: res,
        });
      } else {
        let res = {};
        res[reservationID] = startTime.getTime();
        const userDocRef = doc(db, "users", userID);
        await updateDoc(userDocRef, {
          Reservations: res,
        });
      }
    }
  } catch (error) {
    console.error(error);
    return false;
  }
  return true;
}

async function updateProgress(userID) {
  const userDoc = await getDoc(doc(db, "users", userID));
  try {
    if (userDoc.exists()) {
      await updateDoc(userDocRef, {
        InProgress: true,
      });
    }
  } catch (error) {
    alert(error);
  }
}

async function updateActiveStatus(userID) {
  const userDoc = await getDoc(doc(db, "users", userID));
  try {
    if (userDoc.exists()) {
      await updateDoc(userDocRef, {
        Active: false,
      });
    }
  } catch (error) {
    alert(error);
  }
}

export { reserve, updateProgress, updateActiveStatus };
