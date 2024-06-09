<script>
    import { createEventDispatcher } from "svelte";

    export let pergunta_id;
    export let perguntas;
    export let acertouUltima;
    export let respostaSelecionada;

    const dispatch = createEventDispatcher();

    let perguntaAtual = perguntas[pergunta_id];

    $: perguntaAtual = perguntas[pergunta_id];

    function handleNext() {
        dispatch('next');
    }

    const respostas = ['R1', 'R2', 'R3', 'R4'];
</script>

<div class="gabarito">
    <p>Pergunta {pergunta_id + 1} de {perguntas.length}</p>
    <h3 class="pergunta">{perguntaAtual.PerguntaEmQuestao}</h3>
    {#each respostas as resposta, index}
        <button 
            class="resposta {respostaSelecionada === index + 1 ? (acertouUltima ? 'correta' : 'errada') : ''} {perguntaAtual.correta === index + 1 ? 'corretaBorda' : ''}">
            {perguntaAtual[resposta]} {respostaSelecionada === index + 1 ? (acertouUltima ? '✔️' : '❌') : ''}
        </button>
    {/each}
    <p>{acertouUltima ? "Você acertou!" : "Você errou!"}</p>
    <button class="avancar" on:click={handleNext}>Avançar</button>
</div>

<style>
    .pergunta {
        max-width: 48rem;
    }
    .gabarito {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
    .gabarito button {
        width: 100%;
        max-width: 48rem;
        text-align: center;
        color: black;
        font-weight: 600;
        padding: calc(4vh - 2px);
        background: var(--color-BG3);
        border-radius: 1em;
        text-decoration: none;
        transition: 200ms;
        font-family: inherit;
        border: inherit;
        cursor: default;
        border: 2px solid transparent;
    }
    .gabarito .resposta:hover {
        transform: none;
    }
    .resposta.correta {
        background-color: green;
        color: white;
    }
    .resposta.errada {
        background-color: red;
        color: white;
    }
    .resposta.corretaBorda {
        border-color: green;
    }
    .gabarito .avancar {
        cursor: pointer;
        transition: 200ms;
    }
    .gabarito .avancar:hover {
        transform: scale(1.02);
    }
</style>
