// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYK_dx2woOrgOrpl241L2c5RmQ4sRnJVw",
  authDomain: "testing-auth-9e9e9.firebaseapp.com",
  projectId: "testing-auth-9e9e9",
  storageBucket: "testing-auth-9e9e9.appspot.com",
  messagingSenderId: "811649706507",
  appId: "1:811649706507:web:9452939cb619ffd503750e",
  measurementId: "G-GRF6M760V6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
