import { push, ref } from "firebase/database";
import { database } from "$scripts/firebaseInit";
import { auth } from "$scripts/firebaseInit";
import { json } from "@sveltejs/kit";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function POST(n) {
    try {
        let { nome, email, senha } = await n.request.json();
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        const userDataFake = userCredential.user;

        const userRef = ref(database, 'users/' + nome);
        const userData = {
            nome: nome,
            email: email,
            dinheiro: 0
        };
        await push(userRef, userData);
        console.log('Usuário criado com sucesso!');
        return json(userDataFake)
    } catch (error) {
        console.error('Erro ao cadastrar: ', error);
        return json({ error: error.message });
    }
}