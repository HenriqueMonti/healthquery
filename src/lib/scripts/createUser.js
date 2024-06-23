
/**
 * @param {string} userId
 * @param {string} email
 * @param {string} password
 */

import { ref, set } from "firebase/database";
import { database } from "$scripts/firebaseInit";
import * as bcrypt from 'bcrypt';


/**
 * @param {string} userId
 * @param {string} email
 * @param {string} password
 */
export function createUser(userId, email, password) {
    // Hash da senha usando bcrypt
    const passwordHash = bcrypt.hashSync(password, 12);

    // Referência para o usuário no Firebase Realtime Database
    const userRef = ref(database, 'users/' + userId);

    // Dados do usuário a serem salvos
    const userData = {
        email: email,
        password_hash: passwordHash,
        points: 0
    };

    // Salvar os dados do usuário no Firebase
    set(userRef, userData)
        .then(() => {
            console.log('Usuário criado com sucesso!');
        })
        .catch((/** @type {any} */ error) => {
            console.error('Erro ao criar usuário:', error);
        });
}
