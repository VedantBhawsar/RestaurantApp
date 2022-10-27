import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAT7BZKFJ1ZSnSXroK88UAAlx71y9Fbn3Q",
  authDomain: "food-dfcf6.firebaseapp.com",
  databaseURL: "https://food-dfcf6-default-rtdb.firebaseio.com",
  projectId: "food-dfcf6",
  storageBucket: "food-dfcf6.appspot.com",
  messagingSenderId: "600357539074",
  appId: "1:600357539074:web:1b0ed3190b2db0c57c061b"
};

const app= getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage =getStorage(app)

export {app, firestore, storage};