//import firebase from '@react-native-firebase/app';
//import '@react-native-firebase/auth';
//import '@react-native-firebase/firestore';


import { initializeApp, getApp } from "firebase/app";
import {initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

export const firebaseConfig = {
    apiKey: "AIzaSyCVuRXK0tDtijz_9PWz9Y5icQU4kt7iqQw",
    authDomain: "pkrides-d3c59.firebaseapp.com",
    databaseURL: "https://pkrides-d3c59-default-rtdb.firebaseio.com",
    projectId: "pkrides-d3c59",
    storageBucket: "pkrides-d3c59.appspot.com",
    messagingSenderId: "539323902826",
    appId: "1:539323902826:web:c43816f1c18112bd369313",
    measurementId: "G-RRQCR4ZZBJ"
    };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//export const auth = getAuth(app);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    });