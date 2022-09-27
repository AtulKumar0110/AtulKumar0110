
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyB00fDG9uNEZacOmSgLeim6JbKIGSnpwZ8",
    authDomain: "univapp-4840c.firebaseapp.com",
    databaseURL: "https://univapp-4840c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "univapp-4840c",
    storageBucket: "univapp-4840c.appspot.com",
    messagingSenderId: "852364688475",
    appId: "1:852364688475:web:7b4cf49d60be9a6a9d537e"
  };

export const auth = getAuth();
export const db = getDatabase(app);
const app = initializeApp(firebaseConfig);
export default app;