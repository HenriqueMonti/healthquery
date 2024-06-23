<script>
	import { goto } from "$app/navigation";
	import { addData } from "$scripts/firebase";
    import { listaDeCheckup } from "$scripts/perguntas.js";

    function submittar(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            console.log(key);
            data[key] = value;
        });
        addData('users/user1/checkup', data);
        goto("/");
    }
</script>
<section>

</section>
<form method="post" on:submit={submittar}>
    {#each listaDeCheckup as item}
        <div>
            <h4>
                {item.PerguntaEmQuestao}
            </h4>
            {#if item.TipoResposta === "SimNao"}
                <input type="radio" name={item.NomePergunta} id={item.NomePergunta+"Sim"} value="Sim">
                <label for={item.NomePergunta+"Sim"}>Sim</label>
                <input type="radio" name={item.NomePergunta} id={item.NomePergunta+"Nao"} value="Nao">
                <label for={item.NomePergunta+"Nao"}>Não</label>
            {:else if item.TipoResposta === "Copos"}
                <input type="number" name={item.NomePergunta} id={item.NomePergunta} min=0 max=999> copos de 200ml
            {:else if item.TipoResposta === "Input"}
                <input type="text" name={item.NomePergunta} id={item.NomePergunta}>
            {:else if item.TipoResposta === "Horas"}
                <input type="number" name={item.NomePergunta} id={item.NomePergunta} min=0 max=999> H
            {/if}
        </div>
    {/each}
    <input type="submit" value= "Finalizar">
</form>
<style>
    section{
        background-image: url("$images/lupa.png");
        background-size: 15rem;
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: -1;
    }
    form{
        margin: auto;
        width: 48rem;
        height: 60vh;
    }
    div{
        margin-top: 10px;
    }
    input[type="submit"]{
        margin-top: 50px;
        width: 100%;
        max-width: 48rem;
        text-align: center;
        color: var(--color-BG);
        font-weight: 600;
        padding: calc(4vh - 2px);
        background: var(--color-BT);
        border-radius: 10em;
        text-decoration: none;
        transition: 200ms;
        font-family: inherit;
        border: inherit;
        cursor: pointer;
        border: 2px solid transparent;
    }
    input[type="submit"]:hover {
        transform: scale(1.05);
    }
</style>