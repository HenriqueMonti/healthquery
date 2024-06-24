import { auth, signInWithEmailAndPassword, onAuthStateChanged } from '$scripts/firebaseInit';
import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);

export async function login(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        isAuthenticated.set(true);
    } catch (error) {
        console.error('Erro ao autenticar: ', error);
        return false
    }
}

export function logout() {
    auth.signOut();
    isAuthenticated.set(false);
}

export const user = writable(null);

onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
        user.set(firebaseUser);
    } else {
        user.set(null);
    }
});