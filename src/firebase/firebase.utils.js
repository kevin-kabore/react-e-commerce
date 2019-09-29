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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // query to firestore returns queryReference, or quesrySnapshot
  // - can be either Document, or Collection versions. Will always return this even if no results
  // QueryReference: Object that represents the CURRENT place in DB that we are querying
  // - firestore.doc('/users/:userId') or
  // - firestore.collections('/users')
  // - does not have the actual data. Gives details or method to get the Snapshot object
  // Snapshot Object contains actual data
  // documentRef returns a documentSnapshot object
  // collectionRef returns a querySnapshot object

  const userRef = firestore.doc(`users/${userAuth.uid}`); //documentRef used to CRUD

  const snapShot = await userRef.get(); // .get() gives snapShotObject which gives preview of data

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // make async req to db
      // documentRef object used to CRUD
      // .set() Create/Post equivalent
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef; // will use this in app
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
