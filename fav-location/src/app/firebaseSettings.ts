// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqttwv_RSlW06Qsfi7lFurMfpu9Z-jc5A",
  authDomain: "fav-location-7b7c2.firebaseapp.com",
  projectId: "fav-location-7b7c2",
  storageBucket: "fav-location-7b7c2.appspot.com",
  messagingSenderId: "363505388783",
  appId: "1:363505388783:web:54edb292a4b804e7ec9f1a",
  measurementId: "G-XKH740ZPDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, db, storage };