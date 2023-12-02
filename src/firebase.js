// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAhLv9BYKw9FrVqv9wgMBi-0x0Qc2sXzs",
  authDomain: "realtor-react-30ec1.firebaseapp.com",
  projectId: "realtor-react-30ec1",
  storageBucket: "realtor-react-30ec1.appspot.com",
  messagingSenderId: "1081073396343",
  appId: "1:1081073396343:web:697e653cc83cb7d2bdb472"
};

// Initialize Firebase

initializeApp(firebaseConfig);
export const db = getFirestore()