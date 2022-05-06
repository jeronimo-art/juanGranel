import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import "firebase/compat/storage"
import "@firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDmifrQrHHrwOCfFSzjSqa22O08XoilP5o",
  authDomain: "prodcutosjuangranel.firebaseapp.com",
  databaseURL: "https://prodcutosjuangranel-default-rtdb.firebaseio.com/productos.json",
  projectId: "prodcutosjuangranel",
  storageBucket: "prodcutosjuangranel.appspot.com",
  messagingSenderId: "220006501964",
  appId: "1:220006501964:web:897bc51f42e8408994aee9",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();