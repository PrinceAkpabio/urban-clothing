import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB-Cw9pwWTzTP8tBcL8hnPdpN39reRQxg0",
  authDomain: "urban-db-2868a.firebaseapp.com",
  databaseURL: "https://urban-db-2868a.firebaseio.com",
  projectId: "urban-db-2868a",
  storageBucket: "urban-db-2868a.appspot.com",
  messagingSenderId: "1001012057844",
  appId: "1:1001012057844:web:2d40a12fec81d5193030a1",
  measurementId: "G-QPCLDS7YZK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
