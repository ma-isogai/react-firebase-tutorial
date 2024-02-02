import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuu459eGsuzSjJSZhXMLyN9AvsxruAjvQ",
  authDomain: "fir-login-tutorial-e6162.firebaseapp.com",
  projectId: "fir-login-tutorial-e6162",
  storageBucket: "fir-login-tutorial-e6162.appspot.com",
  messagingSenderId: "32067720968",
  appId: "1:32067720968:web:d862907758e425c26f7ebd",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
