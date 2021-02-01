import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCkTofAcKYvltEcuG0Tc-kBp52KkDruLeE",
    authDomain: "shiroyuki-cb5d5.firebaseapp.com",
    projectId: "shiroyuki-cb5d5",
    storageBucket: "shiroyuki-cb5d5.appspot.com",
    messagingSenderId: "657978916212",
    appId: "1:657978916212:web:0292e92e34ae89b2da4021",
    measurementId: "G-SHYWPMXT2Q"
  }


  firebase.initializeApp(config);


export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

