import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   apiKey: "##",
   authDomain: "##",
   projectId: "todolist-1ad92",
   storageBucket: "##",
   messagingSenderId: "##",
   appId: "##",
   measurementId: "##",
});

const db = firebaseApp.firestore();
export default db;
