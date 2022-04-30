import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9AvE4_KMY_p3S8Dd_Ms3_UufF6aPttRI",
  authDomain: "sea-db5a7.firebaseapp.com",
  projectId: "sea-db5a7",
  storageBucket: "sea-db5a7.appspot.com",
  messagingSenderId: "758131781362",
  appId: "1:758131781362:web:530f02bb6fda8fe8386a6b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
