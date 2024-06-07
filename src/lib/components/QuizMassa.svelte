<script>
    import { createEventDispatcher } from "svelte";

    export let pergunta_id;
    export let perguntas;

    const dispatch = createEventDispatcher();

    let perguntaAtual = perguntas[pergunta_id];

    $: perguntaAtual = perguntas[pergunta_id];

    function handleAnswer() {
        // Dispara o evento 'next' quando uma resposta é escolhida
        dispatch('next');
    }
</script>

<div class="bulletpoints">
    <h3>{perguntaAtual.PerguntaEmQuestao}</h3>
    <button on:click={handleAnswer}>{perguntaAtual.R1}</button>
    <button on:click={handleAnswer}>{perguntaAtual.R2}</button>
    <button on:click={handleAnswer}>{perguntaAtual.R3}</button>
    <button on:click={handleAnswer}>{perguntaAtual.R4}</button>
</div>

<style>
    .bulletpoints {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
    .bulletpoints button {
        width: 100%;
        max-width: 13rem;
        text-align: center;
        color: black;
        font-weight: 600;
        padding: 1em;
        background: var(--color-BG3);
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