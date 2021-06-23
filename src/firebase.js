import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1yr5ve74jLnL7pbkclnBqnvvDTFCoaSg",
  authDomain: "disneyplus-react-f929b.firebaseapp.com",
  projectId: "disneyplus-react-f929b",
  storageBucket: "disneyplus-react-f929b.appspot.com",
  messagingSenderId: "706565956293",
  appId: "1:706565956293:web:6af13084386c9b9d69c6ac",
  measurementId: "G-EV757P2R5L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
