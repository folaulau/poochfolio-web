import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth';
import GroomerApi from './GroomerApi';

const firebaseConfig = {
    apiKey: "AIzaSyCWPe0Y1xqKVM4mMNqMxNYwSsmB5dsg-lk",
    authDomain: "dev-pooch-technologies-inc.firebaseapp.com",
    projectId: "dev-pooch-technologies-inc",
    storageBucket: "dev-pooch-technologies-inc.appspot.com",
    messagingSenderId: "783774460598",
    appId: "1:783774460598:web:b2cea9f39f0ccba48f9417",
    measurementId: "G-CD147SVBFD",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
 const provider = new FacebookAuthProvider();
 const FirebaseApi = {
   signUpWithEmail: (email, password) => {
     return createUserWithEmailAndPassword(auth, email, password);
   },
   signInWithEmail: (email, password) => {
     return signInWithEmailAndPassword(auth, email, password);
   },
   signInWithGoogle: async (navigate) => {
     const googleProvider = new GoogleAuthProvider();
     provider.addScope('profile');
     provider.addScope('email');
     try {
       const res = await signInWithPopup(auth, googleProvider);
       const user = res.user;
       console.log('USER');

       console.log('this is the intent', user);
       let authentication = {
         'token': user.accessToken,
       };

       GroomerApi.authenticate(authentication).then((response) => {
         console.log('Success:', response.data);
         localStorage.setItem('poochToken', response.data.token);
         localStorage.setItem('uuid', response.data.uuid);
         navigate('/sign-up/create-profile');
       });
     } catch (err) {
       console.error(err);
       alert(err.message);
     }
   },
   loginInWithGoogle: async (navigate) => {
     const googleProvider = new GoogleAuthProvider();
     provider.addScope('profile');
     provider.addScope('email');
     try {
       const res = await signInWithPopup(auth, googleProvider);
       const user = res.user;
       console.log('USER');

       console.log('this is the intent', user);
       let authentication = {
         'token': user.accessToken,
       };

       GroomerApi.authenticate(authentication).then((response) => {
         console.log('Success:', response.data);
         localStorage.setItem('poochToken', response.data.token);
         localStorage.setItem('uuid', response.data.uuid);
         navigate('/dashboard');
       });
     } catch (err) {
       console.error(err);
       alert(err.message);
     }
   },
   signInWithFacebook: async (navigate) => {
     try {
       const res = await signInWithPopup(auth, provider);

       const user = res.user;
       console.log('USER');

       console.log('this is the intent', user);
       let authentication = {
         'token': user.accessToken,
       };

       GroomerApi.authenticate(authentication).then((response) => {
         console.log('Success:', response.data);
         localStorage.setItem('poochToken', response.data.token);
         localStorage.setItem('uuid', response.data.uuid);
         navigate('/sign-up/create-profile');
       });
     } catch (err) {
       console.error(err);
       alert(err.message);
     }
   },
   loginWithFacebook: async (navigate) => {
     try {
       const res = await signInWithPopup(auth, provider);

       const user = res.user;
       console.log('USER');

       console.log('this is the intent', user);
       let authentication = {
         'token': user.accessToken,
       };

       GroomerApi.authenticate(authentication).then((response) => {
         console.log('Success:', response.data);
         localStorage.setItem('poochToken', response.data.token);
         localStorage.setItem('uuid', response.data.uuid);
         navigate('/dashboard');
       });
     } catch (err) {
       console.error(err);
       alert(err.message);
     }
   },
 };

export default FirebaseApi;

