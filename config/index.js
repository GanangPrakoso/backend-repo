const { initializeApp } = require("firebase/app");
const { getFirestore, collection } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAit_BWmuTFJ3dns_yKh727nVSmcq3l0-U",
  authDomain: "ebuddy-recruitment.firebaseapp.com",
  projectId: "ebuddy-recruitment",
  storageBucket: "ebuddy-recruitment.firebasestorage.app",
  messagingSenderId: "325321105496",
  appId: "1:325321105496:web:a19e1bd398b19a6b622a2d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersCollection = collection(db, "users");

module.exports = {
  db,
  usersCollection,
};
