<script>
	import { goto } from '$app/navigation';
    import { dinheiro } from '$scripts/stores';
</script>
<header>
    <h1><a href="/">HealthQuery</a></h1>
    <h3>
        <h2>{$dinheiro}<i class="fa-solid fa-circle-dollar-to-slot"></i></h2>
        <a href="/loja" class="tooltip circular">
            <i class="fa-solid fa-store offsetzasso" style="color: var(--color-HEADER);"></i>
            <span class="tooltiptext">LOJA</span>
        </a>
    </h3>
</header>
<style>
    .tooltip{
        position: relative;
        display: inline-block;
        cursor: help;
    }

    .tooltip .tooltiptext{
        visibility: hidden;
        width: 80px;
        margin-left: -40px;
        background-color: var(--color-TEXTO2);
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: -50%;
        left: 50%;

        opacity: 0;
        transition: opacity 0.3s;
    }

    .tooltip:hover .tooltiptext{
        visibility: visible;
        opacity: 1;
    }

    header{
        align-items: center;
        background-color: var(--color-HEADER);
        padding: 1rem;
        width: 100%;
        position: fixed;
        top: 0px;
        letter-spacing: 0.2rem;
        display: flex;
    }
    h3{
        display: flex;
        position: fixed;
        right: 10px;
        color: var(--color-BG);
    }
    h2{
        margin-top: 0.4rem;
        margin-right: 1rem;
    }
    a{
        text-decoration: none;
        color: var(--color-BG);
    }
    a.circular{
        width: 100vw;
        max-width: 3rem;
        height: 100vh;
        max-height: 3rem;
        border-radius: 3rem;
        background-color: var(--color-BG);
    }
    a:hover{
        transform: scale(1.05);
    }
    .offsetzasso{
        margin-top: 1rem;
        margin-left: 0.8rem;
    }
</style>