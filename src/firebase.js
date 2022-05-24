import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRS8fZCHVQPcEnVSBo2DpgsMgNUcypdsg",
  authDomain: "disneyplus-clone-bd195.firebaseapp.com",
  projectId: "disneyplus-clone-bd195",
  storageBucket: "disneyplus-clone-bd195.appspot.com",
  messagingSenderId: "846145512165",
  appId: "1:846145512165:web:4aa52c4ffabfba5a6baa0c",
  measurementId: "G-QSP29GB6YG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;
