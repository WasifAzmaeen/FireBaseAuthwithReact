import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAK_cfJ95NT5FSkUU6Fm8ac3kMEKgIDtKE",
  authDomain: "fir-auth-development-5ce78.firebaseapp.com",
  projectId: "fir-auth-development-5ce78",
  storageBucket: "fir-auth-development-5ce78.appspot.com",
  messagingSenderId: "1085854820205",
  appId: "1:1085854820205:web:cb9c5ed9a73a36c5481c64",
});

const auth = app.auth();

export { auth };
export default app;
