<script>
    import { loja, darkMode, impulso, darkModeComprado } from "$scripts/stores";
	import { atualizarTema } from "../+layout.svelte";
    import ItemLoja from "$components/ItemLoja.svelte"
	import { onMount } from "svelte";
	import { loadFromSessionStorage } from "$scripts/sessionStorage";

    function comprarDarkMode(){
        darkModeComprado.update(_ => 1)
    }

    function equiparDarkMode(equipado){
        equipado = !equipado ? 1 : 0;
        darkMode.update(_ => equipado)
        atualizarTema(equipado);
        return equipado
    }
    
    function comprarImpulso() {
        impulso.update(_ => 1)
        return true
    }

    function equiparImpulso(){
        return true
    }

    const initialLoja = [
        {
            imagem : "🌗",
            nome : "Dark Mode (Equipável)",
            preco : "2",
            oncompra : comprarDarkMode,
            onclick : equiparDarkMode,
            comprado : $darkModeComprado,
            equipado : $darkMode
        },
        {
            imagem : "💊",
            nome : "Impulsionar Próximo Quiz",
            preco : "3",
            oncompra: comprarImpulso,
            onclick : equiparImpulso,
            comprado : $impulso,
            equipado : $impulso
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