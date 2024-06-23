<script>
    import HeaderMassa from "$components/HeaderMassa.svelte";
    import FooterMassa from "$components/FooterMassa.svelte";
    import "./style.css"
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