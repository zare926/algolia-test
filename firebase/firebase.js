// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdHr30C3FlTDS-XUMum_wowaFmLUZqLiM",
  authDomain: "algoliatest-c0b89.firebaseapp.com",
  databaseURL: "algoliatest-c0b89.firebaseio.com",
  projectId: "algoliatest-c0b89",
  storageBucket: "algoliatest-c0b89.appspot.com",
  messagingSenderId: "855905653196",
  appId: "1:855905653196:web:fff9aaa30ba61efb068d69",
  measurementId: "G-5RBRTY7MN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);