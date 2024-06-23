<script>
    import { dinheiro } from '$scripts/stores';
	//import { getContext } from 'svelte';
    let estalogado = false;
    //const isAuthenticated = getContext("isAuthenticated");
    //alert(isAuthenticated)
    let mostrarBotao = true;
    /*
    (function() {
    let currentPath;
    if (window){
        currentPath = window.location.pathname;
    }

    function onPathChange(newPath) {
        if (window.location.pathname === "/login"){
            mostrarBotao = false;
        }
    }

    setInterval(() => {
      if (window && window.location.pathname !== currentPath) {
        currentPath = window.location.pathname;
        onPathChange(currentPath);
      }
    }, 100); // Verifica a cada 100ms. Você pode ajustar esse valor.

    })();
    */
</script>
<header>
    <h1><a href="/">HealthQuery</a></h1>
    <h3>
        {$dinheiro} <i class="fa-solid fa-circle-dollar-to-slot"></i>
        {#if mostrarBotao}
             <a class="login" href="login">
                 {#if estalogado}
                    Deslogar
                 {:else}
                    Log-in
                 {/if}
             </a>
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
    a.login{
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
    a.login:hover{
        transform: scale(1.05);
    }
    i{
        margin-top: 5px;
    }
</style>