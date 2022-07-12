import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBw0sXA9cqZGqLfR5HrEUzACYHety_XREY",
  authDomain: "abatoms-chat-app.firebaseapp.com",
  projectId: "abatoms-chat-app",
  storageBucket: "abatoms-chat-app.appspot.com",
  messagingSenderId: "700454679018",
  appId: "1:700454679018:web:6d5726c176037f4cce4293",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)


