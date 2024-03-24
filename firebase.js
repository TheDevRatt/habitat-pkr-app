import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  connectAuthEmulator,
  signInAnonymously,
} from "firebase/auth";
import {
  getFirestore,
  connectFirestoreEmulator, // Import connectFirestoreEmulator directly
} from "firebase/firestore";
import {
  getStorage,
  connectStorageEmulator, // No need to import these again
} from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

export const firebaseConfig = {
  apiKey: "AIzaSyCVuRXK0tDtijz_9PWz9Y5icQU4kt7iqQw",
  authDomain: "pkrides-d3c59.firebaseapp.com",
  databaseURL: "https://pkrides-d3c59-default-rtdb.firebaseio.com",
  projectId: "pkrides-d3c59",
  storageBucket: "pkrides-d3c59.appspot.com",
  messagingSenderId: "539323902826",
  appId: "1:539323902826:web:c43816f1c18112bd369313",
  measurementId: "G-RRQCR4ZZBJ",
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const functions = getFunctions(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // This is correctly placed

// No need to re-import or redeclare getAuth or getFirestore inside the development check

// Ensure your environment check correctly identifies the development environment
// process.env.NODE_ENV might not always be set as expected in some environments like React Native
// Consider using a different method to determine if you're in a development environment if necessary

// if (process.env.NODE_ENV === "development") {
//   // No need for require statements, use the imported functions directly
//   connectAuthEmulator(auth, "http://10.0.2.2:9099");
//   signInAnonymously(auth).catch((error) => {
//     console.error("Error signing in anonymously: ", error);
//   });
//   connectFirestoreEmulator(db, "10.0.2.2", 8080);
//   connectStorageEmulator(storage, "10.0.2.2", 9199);
// }
