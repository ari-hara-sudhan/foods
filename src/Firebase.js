import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBrwgFdRFvLgV2fLAcho2KpU8blYhdjSfc",
    authDomain: "foods-cd4f4.firebaseapp.com",
    projectId: "foods-cd4f4",
    storageBucket: "foods-cd4f4.appspot.com",
    messagingSenderId: "811477239774",
    appId: "1:811477239774:web:df04e765c25e60f0fdff4f",
    measurementId: "G-0MBN0N91SR"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };