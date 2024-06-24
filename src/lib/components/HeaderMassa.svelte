<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { auth } from '$scripts/firebaseInit';
    import { dinheiro } from '$scripts/stores';
	import { signOut } from 'firebase/auth';

    export async function logout() {
        try {
            await signOut(auth);
            console.log('Usuário deslogado com sucesso');
        } catch (error) {
            console.error('Erro ao deslogar: ', error);
        }
    }

    function logarOuDeslogar(){
        if (auth.currentUser){
            logout()
            location.reload();
        }else{
            goto("/login")
        }
    }
</script>
<header>
    <h1><a href="/">HealthQuery</a></h1>
    <h3>
        {$dinheiro} <i class="fa-solid fa-circle-dollar-to-slot"></i>
        {#if $page.url.pathname !== "/login" && $page.url.pathname !== "/register"}
            <button on:click={logarOuDeslogar}>
                {#if auth.currentUser}
                    Deslogar
                {:else}
                    Log-in
                {/if}
            </button>
        {/if}
    </h3>
</header>
<style>
    header{
        align-items: center;
        background-color: var(--color-HEADER);
        padding: 1rem;
        width: 100%;
        position: fixed;
        top: 0px;
        letter-spacing: 0.2rem;
        display: flex;
    }
    h3{
        display: flex;
        position: fixed;
        right: 10px;
        color: var(--color-BG);
    }
    a{
        text-decoration: none;
        color: var(--color-BG);
    }
    button{
        width: 100vw;
        max-width: 10rem;
        margin-left: 10px;
        text-align: center;
        color: var(--color-BG);
        font-weight: 600;
        padding: 2%;
        border-radius: 1em;
        text-decoration: none;
        transition: 200ms;
        font-family: inherit;
        border: inherit;
        cursor: pointer;
        background-color: transparent;
        border: 2px solid;
    }
    button:hover{
        transform: scale(1.05);
    }
    i{
        margin-top: 5px;
    }
</style>