<script>
    import { dinheiro } from '$scripts/stores';
</script>
<header>
    <h1><a href="/">HealthQuery</a></h1>
    <h3>{$dinheiro} <i class="fa-solid fa-circle-dollar-to-slot"></i></h3>
</header>
<style>
    header{
        background-color: var(--color-HEADER);
        padding: 1rem;
        width: 100%;
        position: fixed;
        top: 0px;
        letter-spacing: 0.2rem;
        display: flex;
    }
    h3{
        position: fixed;
        right: 10px;
        color: var(--color-BG);
    }
    a{
        text-decoration: none;
        color: var(--color-BG);
    }
</style>