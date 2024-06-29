<script>
	import { goto } from "$app/navigation";
	import { getUserDataByEmail } from "$scripts/auth";
	import { consoleError } from "$scripts/consoleUtils";
	import { auth, signInWithEmailAndPassword } from "$scripts/firebaseInit";
	import { dinheiro } from "$scripts/stores";
	import { writable } from "svelte/store";

    let email;
    let senha;
    let errorMessage = '';
    let mostrarEsqueceuSenha = false;
    let userData = writable(null);
    
    async function doLogin() {
        mostrarEsqueceuSenha = false;
        try {
            await signInWithEmailAndPassword(auth, email, senha);
            dinheiro.update(currentValue => 0);
            if (auth.currentUser) {
                const data = await getUserDataByEmail(email);
                userData.set(data);
            } else {
                userData.set(null);
            }
            dinheiro.update(currentValue => $userData.dinheiro);
            goto("/")
        } catch (error) {
            errorMessage = "Ocorreu um erro inesperado.";
            
            switch (error.code) {
                case "auth/network-request-failed":
                    errorMessage = "Verifique a conexão com a internet."
                    break
                case "auth/user-not-found":
                    errorMessage = "Usuário não encontrado. Verifique o E-mail informado."
                    break
                case "auth/wrong-password":
                    errorMessage = "Senha incorreta."
                    mostrarEsqueceuSenha = true;
                    break
                case "auth/invalid-email":
                    errorMessage = "E-mail inválido. Verifique o formato do E-mail informado."
                    break
                default:
                    consoleError("ERRO:", error.code, error.message)
                    break
            }

        }
    }
</script>
<div class="container">
    <label for="email">E-mail:</label>
    <input type="email" id="email" bind:value={email} autocomplete="current-password" />

    <label for="senha">Senha:</label>
    <input type="password" id="senha" bind:value={senha} />
    
    {#if errorMessage}
        <p>{errorMessage}</p>
    {/if}
    
    <button type="submit" on:click={doLogin}>Log-in</button>
    <a href="register">Não estou cadastrado</a>
</div>
<style>
    button {
        padding: 10px 20px;
        background-color: var(--color-BT);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    label, input {
        margin-bottom: 5px;
        width: 50%;
    }
    button, a, p{
        margin-top: 10px;
    }
    p{
        color: var(--color-BG);
        background-color: var(--color-BT-INCORRETO);
        border: 10px solid var(--color-BT-INCORRETO);
        border-radius: 2rem;
    }
</style>