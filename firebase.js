// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ03xUibS4dDjxU4E2QmPXJOSQUTJv518",
  authDomain: "react-native-study-93a46.firebaseapp.com",
  projectId: "react-native-study-93a46",
  storageBucket: "react-native-study-93a46.appspot.com",
  messagingSenderId: "654204994431",
  appId: "1:654204994431:web:aa468bbdec19aa68c7904a",
  measurementId: "G-Z5JTQRGRLX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
