<script>
	import { goto } from "$app/navigation";
	import { auth, signInWithEmailAndPassword } from "$scripts/firebaseInit";

    let email;
    let senha;

    async function doLogin() {
        try {
            await signInWithEmailAndPassword(auth, email, senha);
        } catch (error) {
            console.error('Erro ao autenticar: ', error);
        }
        //console.log(auth.currentUser)
        goto("/")
    }
</script>
<div class="container">
    <label for="email">E-mail:</label>
    <input type="email" id="email" bind:value={email} autocomplete="current-password" />

    <label for="senha">Senha:</label>
    <input type="password" id="senha" bind:value={senha} />
    
    <a href="register">Não estou cadastrado</a>
    <button type="submit" on:click={doLogin}>Log-in</button>
</div>
<style>
    button {
        padding: 10px 20px;
        background-color: #4CAF50;
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
    button{
        margin-top: 10px;
    }
</style>