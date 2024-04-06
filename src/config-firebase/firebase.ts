// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmQyDIpLhjRU_G4dqLC2CMRksyuEHLyD8",
  authDomain: "my-news-378f4.firebaseapp.com",
  projectId: "my-news-378f4",
  storageBucket: "my-news-378f4.appspot.com",
  messagingSenderId: "130199699686",
  appId: "1:130199699686:web:014a04654f47a67450bb27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// export const provider = new createUserWithEmailAndPassword();
export const db = getFirestore(app);

// export default app;
