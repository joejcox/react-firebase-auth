import { initializeApp } from "firebase/app";

export const auth = firebase.Auth();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "login-e2aad.firebaseapp.com",
  projectId: "login-e2aad",
  storageBucket: "login-e2aad.appspot.com",
  messagingSenderId: "574886525798",
  appId: "1:574886525798:web:60e8a468abdd67cc0926a7",
};

const firebaseApp = initializeApp(firebaseConfig);
