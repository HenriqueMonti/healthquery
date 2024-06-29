<script>
    import { darkMode } from "$scripts/stores";
	import { atualizarTema } from "../+layout.svelte";

    function comprarDarkMode(){
        darkMode.update(_ => 1) //wtf
        atualizarTema($darkMode)
    }

    function morrer(){
        window.location.replace("https://esolangs.org/wiki/LOLCODE");
    }
</script>
<h1>Lojinha do tadeu</h1>
<h5 style="color: white; opacity: 0.05;">Comprou se fudeu kkkk</h5>
<br> <!--FIUIUIUiiuu.. BRAZIL ZIL ZIL zil zil...-->
<h2>Itens disponíveis:</h2>
<ul>
    <li>Dark Mode
        {#if $darkMode}
            <span>(Já comprado)</span>
        {:else}
            <button on:click={comprarDarkMode}>Comprar (GRATUITO)</button>
        {/if}
    </li>
    <li>Morte instantânea
        <button on:click={morrer}>Comprar (GRATUITO)</button>
    </li>
</ul>