// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaYApEWzjs8_T8_P1ozYKrRiyoRqX5s4M",
  authDomain: "react-disneyplusapp.firebaseapp.com",
  projectId: "react-disneyplusapp",
  storageBucket: "react-disneyplusapp.appspot.com",
  messagingSenderId: "425517669477",
  appId: "1:425517669477:web:603b7cb0fa6781181afa8c",
  measurementId: "G-Z7DY00MLYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;