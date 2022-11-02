import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    FacebookAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCWPe0Y1xqKVM4mMNqMxNYwSsmB5dsg-lk",
    authDomain: "dev-pooch-technologies-inc.firebaseapp.com",
    projectId: "dev-pooch-technologies-inc",
    storageBucket: "dev-pooch-technologies-inc.appspot.com",
    messagingSenderId: "783774460598",
    appId: "1:783774460598:web:b2cea9f39f0ccba48f9417",
    measurementId: "G-CD147SVBFD",
};

const FirebaseApp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(FirebaseApp);

const FirebaseAPI = {
    providers: {
        google: GoogleAuthProvider,
        facebook: FacebookAuthProvider
    },
    signupWithEmail: createUserWithEmailAndPassword,
    signinWithEmail: signInWithEmailAndPassword,
    signinWithFacebook: signInWithPopup,
    signinWithGoogle: signInWithPopup
}

export { FirebaseApp, FirebaseAuth, FirebaseAPI }