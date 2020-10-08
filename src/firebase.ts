import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAahu9G9QFJUs40ibFdkRqt7hPagjdS2Pc",
    authDomain: "tndr-clone.firebaseapp.com",
    databaseURL: "https://tndr-clone.firebaseio.com",
    projectId: "tndr-clone",
    storageBucket: "tndr-clone.appspot.com",
    messagingSenderId: "944369425073",
    appId: "1:944369425073:web:f612364f72f7bf001ee090"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig) ;
const db = firebaseApp.firestore();

export default db;