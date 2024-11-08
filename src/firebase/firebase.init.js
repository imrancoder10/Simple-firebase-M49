//Do not store config on the client side 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCahnAtYgJK9BPgU2NzLERVYbHD1PHy-fM",
  authDomain: "simple-firebase-464af.firebaseapp.com",
  projectId: "simple-firebase-464af",
  storageBucket: "simple-firebase-464af.firebasestorage.app",
  messagingSenderId: "561776836080",
  appId: "1:561776836080:web:7a01e2210c047852877135"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;