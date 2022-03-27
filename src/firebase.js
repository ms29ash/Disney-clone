import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    // apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
    // authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
    // projectId: "disneyplus-clone-a33d5",
    // storageBucket: "disneyplus-clone-a33d5.appspot.com",
    // messagingSenderId: "37918794208",
    // appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
    // measurementId: "G-DRVLJKWRWG",
    hDomain: "disney-plus-clone-a42ef.firebaseapp.com",
    databaseURL: "https://disney-plus-clone-a42ef-default-rtdb.firebaseio.com",
    projectId: "disney-plus-clone-a42ef",
    storageBucket: "disney-plus-clone-a42ef.appspot.com",
    messagingSenderId: "178843307842",
    appId: "1:178843307842:web:07d5a929e5a47d89a3c2db",
    measurementId: "G-4XFVP4MTM7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage, db };
export default db;