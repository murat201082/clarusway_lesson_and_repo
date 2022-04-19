// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDuTv8m7DGYIFJW9HRAr-MZOv1HIHsWHz8",
//   authDomain: "fire-contact-projesi.firebaseapp.com",
//   databaseURL: "https://fire-contact-projesi-default-rtdb.firebaseio.com",
//   projectId: "fire-contact-projesi",
//   storageBucket: "fire-contact-projesi.appspot.com",
//   messagingSenderId: "781765931232",
//   appId: "1:781765931232:web:0dd8f0e246128e3e0c6085"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;

