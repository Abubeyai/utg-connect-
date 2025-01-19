/*import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJabY9MYuqr-Yg2aGqbKR4AD0xCH0806M",
    authDomain: "utg-connect-90a13.firebaseapp.com",
    projectId: "utg-connect-90a13",
    storageBucket: "utg-connect-90a13.firebasestorage.app",
    messagingSenderId: "741658102696",
    appId: "1:741658102696:web:d26cb661638cdc9e58ab9d",
    measurementId: "G-6LMN1Y1W3H",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;*/

  // Import the required Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDJabY9MYuqr-Yg2aGqbKR4AD0xCH0806M",
  authDomain: "utg-connect-90a13.firebaseapp.com",
  projectId: "utg-connect-90a13",
  storageBucket: "utg-connect-90a13.appspot.com",
  messagingSenderId: "741658102696",
  appId: "1:741658102696:web:d26cb661638cdc9e58ab9d",
  measurementId: "G-6LMN1Y1W3H",
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

// Export the Firestore database
export default db;
