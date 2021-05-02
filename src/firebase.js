import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

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

export const dbService = firebase.firestore();

/*Collection은 폴더, Document는 문서(텍스트) 느낌.
NoSQL데이터베이스는 Collection들을 갖고 있고, 각 Collection은 Document들을 갖고 있음.
 */
