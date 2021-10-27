import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
// import { doc, getDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAY-6k6SxNBKk1APlo-zuajHZoK4S_4dcM",
    authDomain: "pesulafirebase.firebaseapp.com",
    databaseURL: "https://pesulafirebase-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pesulafirebase",
    storageBucket: "pesulafirebase.appspot.com",
    messagingSenderId: "58120148635",
    appId: "1:58120148635:web:085a99d0876d2ec151d83e"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;
firebase.firestore().settings({ experimentalForceLongPolling: true });
// // Import the functions you need from the SDKs you need
// import { firebase,initializeApp } from "firebase/app";
// import { getFirestore,collection, doc, setDoc  } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseApp = initializeApp( {
//   apiKey: "AIzaSyAY-6k6SxNBKk1APlo-zuajHZoK4S_4dcM",
//   authDomain: "pesulafirebase.firebaseapp.com",
//   databaseURL: "https://pesulafirebase-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "pesulafirebase",
//   storageBucket: "pesulafirebase.appspot.com",
//   messagingSenderId: "58120148635",
//   appId: "1:58120148635:web:085a99d0876d2ec151d83e",
// });

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// const db = getFirestore();
