// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCVl-Z22ggUva7MqVLlMNvnHZokLmMvqOw",
    authDomain: "clone-ce98f.firebaseapp.com",
    projectId: "clone-ce98f",
    storageBucket: "clone-ce98f.appspot.com",
    messagingSenderId: "96579012401",
    appId: "1:96579012401:web:0c28ac3d68b00c2bbf5210",
    measurementId: "G-DRKPE2TKTN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};