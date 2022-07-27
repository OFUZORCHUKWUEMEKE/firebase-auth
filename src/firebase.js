import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIKgEd84-foGVJD1PqZ1QV9dGMCUebl_o",
    authDomain: "paybuymax-38ac8.firebaseapp.com",
    projectId: "paybuymax-38ac8",
    storageBucket: "paybuymax-38ac8.appspot.com",
    messagingSenderId: "666090177437",
    appId: "1:666090177437:web:a0924a2b6c89f452c3a574",
    measurementId: "G-6CDTVR9HV6"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);