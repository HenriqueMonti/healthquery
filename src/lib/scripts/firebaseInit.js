import { initializeApp } from 'firebase/app';
import { getAuth,signInWithEmailAndPassword}from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { firebaseConfig } from '$scripts/firebaseConfig';

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Configure os serviços Firebase
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database,signInWithEmailAndPassword };
