import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyCn2BWGhyhiohA9Fe3Vhg0XFi6yNsZcAHg",
  authDomain: "portfolio2-14f9c.firebaseapp.com",
  projectId: "portfolio2-14f9c",
  storageBucket: "portfolio2-14f9c.appspot.com",
  messagingSenderId: "994440353829",
  appId: "1:994440353829:web:efa1875e1ed3cc195087cc"
};
const app = initializeApp(firebaseConfig);
getFirestore(app);
