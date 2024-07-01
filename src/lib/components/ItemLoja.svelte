<script>
	import { saveToSessionStorage } from "$scripts/sessionStorage";
    export let imagem;
	export let nome;
	export let preco;
	export let onclick;
	export let comprado;
	export let equipado;
	export let index;
	import { dinheiro, loja } from "$scripts/stores";
    import somComprar from "$sounds/buy_1.mp3";
    const CATCHING = new Audio(somComprar);

	function handleonclick() {
        if (!comprado){
            comprado = true;
            CATCHING.play();
            dinheiro.update(_ => $dinheiro - preco);
			loja.update(old => {old[index].comprado = true ; return old});
        }else{
			equipado = onclick(equipado);
			loja.update(old => {old[index].equipado = equipado ; return old});
        }
		loja.subscribe((value) => {
			//console.log(value);
    		saveToSessionStorage('loja', value);
		});
	}
</script>

<button type="button" on:click={handleonclick} class="item-loja">
	<!-- <img class="imagem-preview" src={imagem} alt={nome} /> -->
	<p class="imagem-preview">{imagem}</p>
	<div class="nome">{nome}</div>
    {#if comprado == false}
        <div class="preco">{preco} <i class="fa-solid fa-circle-dollar-to-slot"></i></div>
    {/if}
    {#if equipado}
        <i class="fa-solid fa-check check"></i>
    {/if}
</button>

<style>
    .check {
        color: green;
        position: absolute;
        font-size: 6rem;
        top: -2rem;
        left: -2rem;
    }

	.item-loja {
		border: 1px solid #ccc;
		border-radius: 8px;
		padding: 10px;
		text-align: center;
		margin: 10px;
		background-color: #fff;
		cursor: pointer;
	}

	.item-loja:hover {
		background-color: #f0f0f0;
	}

	.imagem-preview {
		font-size: 100px;
		margin: 0 auto;
	}

	.nome {
		font-size: 1.2em;
		font-weight: bolder;
		color: var(--color-TEXTO2);
		margin: 5px 0;
	}

	.preco {
		color: green;
		font-weight: bold;
	}

	button {
		border: none;
		background: none;
		padding: 0;
		width: fit-content;
        min-width: 20rem;
		cursor: pointer;
        position: relative;
	}

	button:focus {
		outline: none;
	}
</style>
