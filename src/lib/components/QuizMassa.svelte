<script>
    export let PerguntaEmQuestao = "🤨";
    export let R1 = "🤨";
    export let R2 = "🤨";
    export let R3 = "🤨";
    export let R4 = "🤨";
</script>
<div class="bulletpoints">
    <h3>{PerguntaEmQuestao}</h3>
    <button>{R1}</button>
    <button>{R2}</button>
    <button>{R3}</button>
    <button>{R4}</button>
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
    .bulletpoints button:hover{
        transform: scale(1.02);
    }
</style>