// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl6roZp72o4nezGlYXa4fwZmMi0TYHF_o",
  authDomain: "inscape-web-app.firebaseapp.com",
  projectId: "inscape-web-app",
  storageBucket: "inscape-web-app.appspot.com",
  messagingSenderId: "837067795021",
  appId: "1:837067795021:web:ba5df0abb25c970aa04a04",
  measurementId: "G-LP3RHFF240",
};

// Initialize Firebase
const app = !getApps().length?initializeApp(firebaseConfig):getApp();
// const analytics = getAnalytics(app);
const db = getFirestore();

export { app, db };
