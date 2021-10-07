/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();
