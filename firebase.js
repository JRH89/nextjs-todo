import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDoaGmGs-vQo0kusAaIww5O86xf2uKJuG4",
  authDomain: "next-todo-19711.firebaseapp.com",
  projectId: "next-todo-19711",
  storageBucket: "next-todo-19711.appspot.com",
  messagingSenderId: "626196828886",
  appId: "1:626196828886:web:035241602dc1aa170caf77"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)