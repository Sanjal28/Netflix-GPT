// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1xzHNQx2kKLYVcLY9wg8S2X1_VYj_ET4",
  authDomain: "netflix-gpt-e47d3.firebaseapp.com",
  projectId: "netflix-gpt-e47d3",
  storageBucket: "netflix-gpt-e47d3.appspot.com",
  messagingSenderId: "499645869746",
  appId: "1:499645869746:web:91852f2c90e78b3a1ca3ab",
  measurementId: "G-2RCD8KLV7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// since it is used most frequently so it is centralized
export const auth = getAuth();