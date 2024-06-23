<script>
    import { createEventDispatcher } from "svelte";

    export let pergunta_id;
    export let perguntas;

    const dispatch = createEventDispatcher();

    let perguntaAtual = perguntas[pergunta_id];

    $: perguntaAtual = perguntas[pergunta_id];

    function handleAnswer(resposta) {
        dispatch('answer', resposta);
    }
</script>

<div class="bulletpoints">
    <p>Pergunta {pergunta_id + 1} de {perguntas.length}</p>
    <h3 class="pergunta">{perguntaAtual.PerguntaEmQuestao}</h3>
    <button on:click={() => handleAnswer(1)}>{perguntaAtual.R1}</button>
    <button on:click={() => handleAnswer(2)}>{perguntaAtual.R2}</button>
    <button on:click={() => handleAnswer(3)}>{perguntaAtual.R3}</button>
    <button on:click={() => handleAnswer(4)}>{perguntaAtual.R4}</button>
</div>

<style>
    .pergunta {
        max-width: 48rem;
        color: var(--color-TEXTO-OFF);
    }
    .bulletpoints {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
    .bulletpoints button {
        width: 100%;
        max-width: 48rem;
        text-align: center;
        color: var(--color-BG);
        font-weight: 600;
        padding: 4vh;
        background: var(--color-BT);
        border-radius: 1em;
        text-decoration: none;
        transition: 200ms;
        font-family: inherit;
        border: inherit;
        cursor: pointer;
    }
    .bulletpoints button:hover {
        transform: scale(1.02);
    }
</style>