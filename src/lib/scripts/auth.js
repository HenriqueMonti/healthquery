import { auth, signInWithEmailAndPassword } from '$scripts/firebaseInit';
import { writable } from 'svelte/store';

// Define a store para o estado de autenticação
export const isAuthenticated = writable(false);

// Função de login com tipos explícitos
export async function login(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        isAuthenticated.set(true);
    } catch (error) {
        console.error('Erro ao autenticar: ', error);
    }
}

// Função de logout
export function logout() {
    auth.signOut();
    isAuthenticated.set(false);
}
