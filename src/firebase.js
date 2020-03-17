import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import 'firebase/storage';

// TODO: Install env and add .env into gitignore because these should be private(although in this case not)
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyBnCTS77x1023nAXYEPY7nk5fkLoqHXEtA",
    authDomain: "melbourne-tours-coding-test.firebaseapp.com",
    databaseURL: "https://melbourne-tours-coding-test.firebaseio.com",
    projectId: "melbourne-tours-coding-test",
    storageBucket: "melbourne-tours-coding-test.appspot.com",
    messagingSenderId: "661859946727",
    appId: "1:661859946727:web:0517309186f4788ff59242"
};

firebase.initializeApp(firebaseConfig)
export default firebase;