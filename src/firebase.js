import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLjh8vBlt4wQyLedfvMByCLARiUlYLELY",
  authDomain: "nwitter-f04bf.firebaseapp.com",
  projectId: "nwitter-f04bf",
  storageBucket: "nwitter-f04bf.appspot.com",
  messagingSenderId: "183466732765",
  appId: "1:183466732765:web:a4a99640cc470e70003f34",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
