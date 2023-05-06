// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw5Rk_DK2nMEeNmCjd5BOjojJWMw2EAvw",
  authDomain: "internproject-3f5fd.firebaseapp.com",
  projectId: "internproject-3f5fd",
  storageBucket: "internproject-3f5fd.appspot.com",
  messagingSenderId: "630940037844",
  appId: "1:630940037844:web:93f4f41da8c3195f914141"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);