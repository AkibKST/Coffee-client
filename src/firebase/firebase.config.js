// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5ejaYL-beTAZzotSzvjz3oOTFe1wZuaM",
  authDomain: "coffee-store-ca6da.firebaseapp.com",
  projectId: "coffee-store-ca6da",
  storageBucket: "coffee-store-ca6da.appspot.com",
  messagingSenderId: "381173436537",
  appId: "1:381173436537:web:40d4127adf5651987704a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;