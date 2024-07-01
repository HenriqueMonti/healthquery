<script>
	import { saveToSessionStorage } from "$scripts/sessionStorage";
    export let imagem;
	export let nome;
	export let preco;
	export let oncompra;
	export let onclick;
	export let comprado; //TODO
	export let equipado; //TODO
	export let index; //TODO
	let errorMessage;
	import { dinheiro, loja } from "$scripts/stores";
    import somComprar from "$sounds/buy_1.mp3";
    const CATCHING = new Audio(somComprar);

	function handleonclick() {
		errorMessage = null;
        if (!comprado){
			if ($dinheiro >= preco) {
				equipado = oncompra();
				loja.update(old => {old[index].equipado = equipado ; return old}); //TODO
				comprado = true;
				CATCHING.play();
				dinheiro.update(_ => $dinheiro - preco);
				loja.update(old => {old[index].comprado = true ; return old}); //TODO
			} else {
				errorMessage = "Dinheiro insuficiente!"
			}
        }else{
			equipado = onclick(equipado);
			loja.update(old => {old[index].equipado = equipado ; return old}); //TODO
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
{#if errorMessage}
    <p class = "erro">{errorMessage}</p>
{/if}

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

	p.erro{
        color: var(--color-BG);
        background-color: var(--color-BT-INCORRETO);
        border: 10px solid var(--color-BT-INCORRETO);
        border-radius: 2rem;
    }
</style>
