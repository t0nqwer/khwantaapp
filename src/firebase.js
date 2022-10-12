// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB214ofmaUsi8tGC3csXGlh-EbgDaeARHk",
  authDomain: "khwanta-demo.firebaseapp.com",
  projectId: "khwanta-demo",
  storageBucket: "khwanta-demo.appspot.com",
  messagingSenderId: "751611807450",
  appId: "1:751611807450:web:01dcf8750e58dfcbee47e3",
  measurementId: "G-LT2Z4H58N9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
