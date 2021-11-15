/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import firebaseConfig from './firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
