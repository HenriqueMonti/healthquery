import { ref, push } from "firebase/database";
import { database } from "$scripts/firebaseInit";
import { json } from "@sveltejs/kit";
import { consoleError, consoleLog } from "$scripts/consoleUtils";

export async function POST(n) {
    try {
        let { nome, email } = await n.request.json();

        const userRef = ref(database, 'users/' + nome);
        const userData = {
            nome: nome,
            email: email,
            dinheiro: 0
        };
        await push(userRef, userData);
        consoleLog('Usuário criado com sucesso!');
        return json(userData)
    } catch (error) {
        consoleError('Erro ao cadastrar: ', error);
        return json({ error: error.message });
    }
}