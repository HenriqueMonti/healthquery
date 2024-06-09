<script>
    import { createEventDispatcher } from "svelte";

    export let pergunta_id;
    export let perguntas;
    export let acertouUltima;

    const dispatch = createEventDispatcher();

    let perguntaAtual = perguntas[pergunta_id];

    $: perguntaAtual = perguntas[pergunta_id];

    function handleNext() {
        dispatch('next');
    }
</script>

<div class="gabarito">
    <h3>{perguntaAtual.PerguntaEmQuestao}</h3>
    <p>Resposta correta: {perguntaAtual[`R${perguntaAtual.correta}`]}</p>
    <p>{acertouUltima ? "Você acertou!" : "Você errou!"}</p>
    <button on:click={handleNext}>Avançar</button>
</div>

<style>
    .gabarito {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        text-align: center;
    }
    .gabarito button {
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
    .gabarito button:hover {
        transform: scale(1.02);
    }
</style>
