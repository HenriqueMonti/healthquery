import { ref, set } from "firebase/database";
import { database } from "$scripts/firebaseInit";
//import bcrypt from 'bcrypt';

async function hashPassword(password) {
    const saltRounds = 12;
    //return await bcrypt.hash(password, saltRounds);
}

export async function createUser(param_nome, email, password) {
    return
    try {
        // Hash da senha usando bcrypt
        const passwordHash = await hashPassword(password);

        // Referência para o usuário no Firebase Realtime Database
        const userRef = ref(database, 'users/' + param_nome);

        // Dados do usuário a serem salvos
        const userData = {
            nome: param_nome,
            email: email,
            password_hash: passwordHash,
            dinheiro: 0
        };

        // Salvar os dados do usuário no Firebase
        await set(userRef, userData);
        console.log('Usuário criado com sucesso!');
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
    }
}