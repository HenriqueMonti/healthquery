<script context="module">
    import { onMount } from "svelte";

    export function atualizarTema(tema) {
        if (tema === 1) { //darkmode tlgd
            document.documentElement.style.setProperty('--color-BG', "#333333")
            document.documentElement.style.setProperty('color', "#ffffff")
        } else {
            document.documentElement.style.setProperty('--color-BG', "#ffffff")
            document.documentElement.style.setProperty('color', "#000000")
        }
    }
</script>

<script>
    import HeaderMassa from "$components/HeaderMassa.svelte";
    import FooterMassa from "$components/FooterMassa.svelte";
    import "./style.css"
    import { darkMode } from "$scripts/stores";
    onMount(() => atualizarTema($darkMode));
    $: $darkMode = $darkMode;
</script>

<HeaderMassa></HeaderMassa>
<main>
    <slot/>
</main>
<FooterMassa></FooterMassa>
<style>
    main{
        padding: 6.9rem 1rem;
    }
</style>