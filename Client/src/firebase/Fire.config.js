
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
require('dotenv').config();


const firebaseConfig = {
  apiKey:process.env.FIREBASE_API_KEY,
  authDomain: "opsden-12.firebaseapp.com",
  projectId: "opsden-12",
  storageBucket: "opsden-12.appspot.com",
  messagingSenderId: process.env.FIREBASE_APP_ID,
  appId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default app;
