import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, update } from "firebase/database";

export const firebaseConfig = {
    apiKey: "AIzaSyAuqFJhTiKYRHOUBdRK_IMkqjnPoGLXQR8",
    authDomain: "healthquery-c5256.firebaseapp.com",
    databaseURL: "https://healthquery-c5256-default-rtdb.firebaseio.com",
    projectId: "healthquery-c5256",
    storageBucket: "healthquery-c5256.appspot.com",
    messagingSenderId: "825208819328",
    appId: "1:825208819328:web:ad264ee30e6ac61d5e2065",
    measurementId: "G-5PHMWC8C4F"
  };
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);