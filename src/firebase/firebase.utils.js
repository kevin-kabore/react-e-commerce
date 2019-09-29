import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAmY0vedbb1YkD_v1LNCBuLkt-NfgVsnV0',
  authDomain: 'react-ecom-db-bad3c.firebaseapp.com',
  databaseURL: 'https://react-ecom-db-bad3c.firebaseio.com',
  projectId: 'react-ecom-db-bad3c',
  storageBucket: '',
  messagingSenderId: '586680661262',
  appId: '1:586680661262:web:bece64bb8d3fb58b9fd35f',
  measurementId: 'G-GSYJLHXGF8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
