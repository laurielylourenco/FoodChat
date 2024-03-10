// FirebaseInit.js
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase';

const firebaseInit = initializeApp(firebaseConfig);
export { firebaseInit };
