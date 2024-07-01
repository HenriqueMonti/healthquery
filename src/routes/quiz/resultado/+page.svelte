<script>
    import { onMount } from 'svelte';
    import xd from "$lib/images/hqclubp.gif";
	import { auth } from '$scripts/firebaseInit';
    
    let texto = "";
    let texto2 = "";
    
    onMount(() => {
        let ganho = Number(sessionStorage.getItem('ultimoAcertos'))
        let perguntas = Number(sessionStorage.getItem('ultimoLength'))
        let multiplicou = Number(sessionStorage.getItem('multiplicou'))
        texto = "Quiz concluído! Você acertou "+ganho+" de "+perguntas+" perguntas."
        if (multiplicou && multiplicou > 0) {
            texto2 = "+"+(ganho*2) + " (💊x2)"
        } else {
            texto2 = "+"+(ganho)
        }
        if (!auth.currentUser){
            texto2 = "Faça login para fazer progresso!"
        }
        if (texto === null) {
            window.location.href = '/';
        }else{
            sessionStorage.removeItem('texto'); // Limpar o texto do armazenamento local após o uso
        }
    });
</script>

<div class="bulletpoints">
    {#if texto2}
        <h1>{texto}</h1>
        {#if auth.currentUser}
            <h3>{texto2}  <i class="fa-solid fa-circle-dollar-to-slot"></i></h3>
        {:else}
            <h3>{texto2}</h3>
        {/if}
    {/if} 
    <a href="/quiz">Reiniciar Quiz</a>
    <a href="/">Voltar ao Início</a>
    <img src={xd} alt="">
</div>
<style>
    .bulletpoints {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
    .bulletpoints a {
        width: 100%;
        max-width: 13rem;
        text-align: center;
        color: var(--color-BG);
        font-weight: 600;
        padding: 1em;
        background: var(--color-BT);
        border-radius: 1em;
        text-decoration: none;
        transition: 200ms;
    }
    .bulletpoints a:hover{
        transform: scale(1.02);
    }
    h3{
        color: var(--color-TEXTO2);
    }
</style>