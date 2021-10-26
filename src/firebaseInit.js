/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import firebaseConfig from './firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();
