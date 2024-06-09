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
</script>

<div class="gabarito">
    <p>Pergunta {pergunta_id + 1} de {perguntas.length}</p>
    <h3 class="pergunta">{perguntaAtual.PerguntaEmQuestao}</h3>
    <!--rick, velho, se vc estiver lendo isso me desculpa ai kkkkkkkkk-->
    <!--cadê o meu for i=1,4 do print(i) end? :pensive:-->
    <button 
        class="resposta {respostaSelecionada === 1 ? (acertouUltima ? 'correta' : 'errada') : ''} {perguntaAtual.correta === 1 ? 'corretaBorda' : ''}">
        {perguntaAtual.R1} {respostaSelecionada === 1 ? (acertouUltima ? '✔️' : '❌') : ''}
    </button>
    <button 
        class="resposta {respostaSelecionada === 2 ? (acertouUltima ? 'correta' : 'errada') : ''} {perguntaAtual.correta === 2 ? 'corretaBorda' : ''}">
        {perguntaAtual.R2} {respostaSelecionada === 2 ? (acertouUltima ? '✔️' : '❌') : ''}
    </button>
    <button 
        class="resposta {respostaSelecionada === 3 ? (acertouUltima ? 'correta' : 'errada') : ''} {perguntaAtual.correta === 3 ? 'corretaBorda' : ''}">
        {perguntaAtual.R3} {respostaSelecionada === 3 ? (acertouUltima ? '✔️' : '❌') : ''}
    </button>
    <button 
        class="resposta {respostaSelecionada === 4 ? (acertouUltima ? 'correta' : 'errada') : ''} {perguntaAtual.correta === 4 ? 'corretaBorda' : ''}">
        {perguntaAtual.R4} {respostaSelecionada === 4 ? (acertouUltima ? '✔️' : '❌') : ''}
    </button>
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
