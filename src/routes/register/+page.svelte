<script>
	import { createUser } from "$scripts/createUser";

    let nome;
    let email;
    let senha;
    let senha2;
    let errorMessage = '';

    function doLogin() {
        if (senha !== senha2) {
            errorMessage = 'As senhas não coincidem';
            return;
        }
        createUser(nome, email, senha)
    }
</script>
<div class="container">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" bind:value={nome} />

    <label for="email">E-mail:</label>
    <input type="text" id="email" bind:value={email} />

    <label for="senha">Senha:</label>
    <input type="password" id="senha" bind:value={senha} />

    <label for="confirma-senha">Confirmar Senha:</label>
    <input type="password" id="confirma-senha"  bind:value={senha2}/>

    {#if errorMessage}
        <p style="color: red;">{errorMessage}</p>
    {/if}
    
    <a href="login">Já estou cadastrado</a>
    <button type="submit" on:click={doLogin}>Cadastrar-se</button>
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