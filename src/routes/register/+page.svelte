<script>
	import { goto } from "$app/navigation";
	import { auth } from "$scripts/firebaseInit";
	import { createUserWithEmailAndPassword } from "firebase/auth";

    let nome;
    let email;
    let senha;
    let senha2;
    let errorMessage = '';

    async function doRegister() {
        if (senha !== senha2) {
            errorMessage = 'As senhas não coincidem';
            return;
        }
        try {
            // user
            await createUserWithEmailAndPassword(auth, email, senha);
            // userData
            const response = await fetch("/register", {method:"POST", body:JSON.stringify({
                nome, email
            }), headers: {
                'content-type': 'application/json'
            }})
            if (!response.ok){
                throw new Error("RESPONSE NOT OKAY")
            }
            alert("Registrado com sucesso!")
            goto("/login")
        } catch (error) {
            errorMessage = 'Houve um erro inesperado ao tentar registrar.'

            if (error.code){ //eu fiz escadinha no codigo ;-;
                switch (error.code) {
                    case "auth/network-request-failed":
                        errorMessage = "Verifique a conexão com a internet."
                        break
                    case "auth/email-already-in-use":
                        errorMessage = "O E-mail informado já está em uso. Utilize outro ou faça log-in."
                        break
                    case "auth/invalid-email":
                        errorMessage = "E-mail inválido. Verifique o formato do E-mail informado."
                        break
                    case "auth/weak-password":
                        errorMessage = "Senha fraca. Por favor, use uma senha mais forte."
                        break
                    default:
                        console.error("ERRO:", error.code, error.message)
                        break
                }
            } else if (error.message) {
                console.error(error.message);
            }
        }
    }
</script>
<div class="container">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" bind:value={nome} autocomplete="name"/>

    <label for="email">E-mail:</label>
    <input type="email" id="email" bind:value={email} autocomplete="email"/>

    <label for="senha">Senha:</label>
    <input type="password" id="senha" bind:value={senha} autocomplete="new-password"/>

    <label for="confirma-senha">Confirmar Senha:</label>
    <input type="password" id="confirma-senha"  bind:value={senha2} autocomplete="new-password"/>

    {#if errorMessage}
        <p>{errorMessage}</p>
    {/if}
    
    <button type="submit" on:click={doRegister}>Cadastrar-se</button>
    <a href="login">Já estou cadastrado</a>
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