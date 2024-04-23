import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getAuth,
  signOut,
  sendPasswordResetEmail,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {

  apiKey: "AIzaSyD7KShH6XUp8xX97GmMpuE899LJidEqFKE",
  authDomain: "apiweb-50632.firebaseapp.com",
  projectId: "apiweb-50632",
  storageBucket: "apiweb-50632.appspot.com",
  messagingSenderId: "1059217774159",
  appId: "1:1059217774159:web:c239d22373478a7728bc3a",
  measurementId: "G-VLLCS8B3HY"
  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

export const signInPopup = (provider) => signInWithPopup(auth, provider);

export const sendEmailToResetPassword = (email) => sendPasswordResetEmail(auth, email)
export const sendEmail = (user) => sendEmailVerification(user);
export const logOut = async () => signOut(auth);

export const signinEmailPassword = async (email, password) => signInWithEmailAndPassword(auth, email, password);


export const createUserEmailPassword = async (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const loginWithGoogle = async (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const loginWithFacebook = async (email, password) =>createUserWithEmailAndPassword(auth, email, password);

export const onAuthChanged = (user) => onAuthStateChanged(auth, user);

export const deleteCurrentUser = async () => auth.currentUser.delete();
