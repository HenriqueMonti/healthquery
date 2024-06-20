<script>
    import { onMount } from 'svelte';
    
    let texto = '';
    
    onMount(() => {
        // @ts-ignore
        texto = sessionStorage.getItem('texto');
        if (texto === null) {
            window.location.href = '/';
        }else{
            sessionStorage.removeItem('texto'); // Limpar o texto do armazenamento local após o uso
        }
    });
</script>

<div class="bulletpoints">
    <h1>{texto}</h1>
    <a href="/quiz">Reiniciar Quiz</a>
    <a href="/">Voltar ao Início</a>
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
</style>