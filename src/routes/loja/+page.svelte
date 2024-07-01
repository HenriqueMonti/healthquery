<script>
    import { darkMode, loja } from "$scripts/stores";
	import { atualizarTema } from "../+layout.svelte";
    import ItemLoja from "$components/ItemLoja.svelte"
	import { onMount } from "svelte";
	import { loadFromSessionStorage } from "$scripts/sessionStorage";

    function comprarDarkMode(equipado){
        equipado = !equipado ? 1 : 0;
        darkMode.update(_ => equipado)
        atualizarTema(equipado);
        return equipado
    }

    function comprarMorte(){
        window.location.replace("https://esolangs.org/wiki/LOLCODE");
    }

    const initialLoja = [
        {
            imagem : "🌗",
            nome : "Dark Mode",
            preco : "0",
            onclick : comprarDarkMode,
            comprado : false,
            equipado : $darkMode
        },
        {
            imagem : "💀",
            nome : "Morte Instantânea",
            preco : "3",
            onclick : comprarMorte,
            comprado : false,
            equipado : false
        }
    ]

    onMount(() => {
        loja.update(_ => loadFromSessionStorage("loja"));
        //console.log($loja); //??
        if ($loja.length == 0){
            loja.update(_ => initialLoja);
        } else {
            loja.update(old => old.map((a,i) => a.onclick = initialLoja[i].onclick))
        }
    })
</script>

<style>
    div{
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        align-items: center;
    }
</style>

<div>
    <h1><b>FARMÁCIA</b></h1>
    {#each $loja as values, index (index)}
        <ItemLoja {...values}{index}/>
    {/each}
</div>