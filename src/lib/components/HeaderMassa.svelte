<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { auth } from '$scripts/firebaseInit';
	import { signOut } from 'firebase/auth';
    import { getUserDataByEmail } from '$scripts/auth';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

    let userData = writable(null);

    async function fetchUserData() {
        if (auth.currentUser) {
            const data = await getUserDataByEmail(auth.currentUser.email);
            userData.set(data);
        } else {
            userData.set(null);
        }
    }

    onMount(() => {
        fetchUserData();
    });

    auth.onAuthStateChanged(() => {
        fetchUserData();
    });

    export async function logout() {
        try {
            await signOut(auth);
            console.log('Usuário deslogado com sucesso');
        } catch (error) {
            console.error('Erro ao deslogar: ', error);
        }
    }

    function deslogar(){
        logout()
        location.reload();
    }
    
    function gotologin(){
        goto("/login")
    }

    function gotoloja(){
        goto("/loja")
    }
</script>
<header>
    <h1><a href="/">HealthQuery</a></h1>
    <h3>
        {#if $page.url.pathname !== "/login" && $page.url.pathname !== "/register"}
            {#if auth.currentUser && $userData?.dinheiro != null}
                {$userData.dinheiro} <i class="fa-solid fa-circle-dollar-to-slot"></i>
            {/if}
            {#if auth.currentUser}
                <button on:click={gotoloja} class="tooltip circular">
                    <i class="fa-solid fa-store" style="color: var(--color-HEADER);"></i>
                    <span class="tooltiptext">LOJA</span>
                </button>
                <button on:click={deslogar} class="tooltip circular">
                    <span class="tooltiptext">LOG-OUT</span>
                    <i class="fa-solid fa-right-from-bracket" style="color: var(--color-HEADER);"></i>
                </button>
            {:else}
                <button on:click={gotologin}>
                    Login
                </button>
            {/if}
        {/if}
    </h3>
</header>
<style>
    .tooltip{
        position: relative;
        display: inline-block;
        cursor: help;
    }

    .tooltip .tooltiptext{
        visibility: hidden;
        width: 80px;
        margin-left: -40px;
        background-color: var(--color-TEXTO2);
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: -50%;
        left: 50%;

        opacity: 0;
        transition: opacity 0.3s;
    }

    .tooltip:hover .tooltiptext{
        visibility: visible;
        opacity: 1;
    }

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
    button.circular{
        width: 100vw;
        max-width: 3rem;
        height: 100vh;
        max-height: 3rem;
        border-radius: 3rem;
        background-color: var(--color-BG);
    }
    button:hover{
        transform: scale(1.05);
    }
    i{
        margin-top: 5px;
    }
</style>