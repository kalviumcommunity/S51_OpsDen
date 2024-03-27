
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDVaHXCUk7RTWDltkt8kKqlIvk8Q3ZYCro",
  authDomain: "ops-den.firebaseapp.com",
  projectId: "ops-den",
  storageBucket: "ops-den.appspot.com",
  messagingSenderId: "722253974355",
  appId: "1:722253974355:web:83f2634408e4eaa706afa6",
  measurementId: "G-DTRL6F8JQK"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
