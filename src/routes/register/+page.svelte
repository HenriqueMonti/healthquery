<script>
	import { goto } from "$app/navigation";

    let nome;
    let email;
    let senha;
    let senha2;
    let errorMessage = '';

    function doRegister() {
        if (senha !== senha2) {
            errorMessage = 'As senhas não coincidem';
            return;
        }
        fetch("/register", {method:"POST", body:JSON.stringify({
            nome, email, senha
        }), headers: {
            'content-type': 'application/json'
        }})
        goto("/login")
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
        <p style="color: red;">{errorMessage}</p>
    {/if}
    
    <a href="login">Já estou cadastrado</a>
    <button type="submit" on:click={doRegister}>Cadastrar-se</button>
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