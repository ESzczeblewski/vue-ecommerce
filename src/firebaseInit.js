/* eslint-disable no-unused-vars */
// import * as firebase from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// export default getFirestore(firebaseApp);

// Initialize Cloud Firestore through Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();
