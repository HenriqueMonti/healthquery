import { auth, signInWithEmailAndPassword, onAuthStateChanged } from '$scripts/firebaseInit';
import { getDatabase, ref, query, orderByChild, equalTo, get } from "firebase/database";
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

const database = getDatabase();

export async function getUserDataByEmail(email) {
    try {
        const userRef = ref(database, 'users');
        const emailQuery = query(userRef, orderByChild('email'));
        const querySnapshot = await get(emailQuery);

        if (querySnapshot.exists()) {
            const userData = Object.values(querySnapshot.val())
            .filter(user => user[Object.keys(user)[0]].email === email)[0]
            return userData[Object.keys(userData)[0]];
        } else {
            console.log('No such document!');
            return null;
        }
    } catch (error) {
        console.error('Erro ao obter dados do usuário: ', error);
        return null;
    }
}

onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
        user.set(firebaseUser);
    } else {
        user.set(null);
    }
});