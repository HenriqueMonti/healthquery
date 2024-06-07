<script>
    /** @type {import('./$types').LayoutData} */
    import HeaderMassa from "$components/HeaderMassa.svelte";
    import FooterMassa from "$components/FooterMassa.svelte";
    import "./style.css"
    //export let data;
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