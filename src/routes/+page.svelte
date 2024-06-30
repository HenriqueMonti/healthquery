<script>
	import LeaderboardMassa from "$components/LeaderboardMassa.svelte";
    import { fezCheckup } from "$scripts/stores";
    import { auth } from "$scripts/firebaseInit";
</script>
<div class="bulletpoints">
    <a class="ativado" href="/quiz">Healthy Quiz</a>
    {#if auth.currentUser}
        {#if $fezCheckup}
            <a class="desativado tooltip" href="/" >
                Healthy Check Up
                <span class="tooltiptext">Você já fez o Check Up hoje!</span>
            </a>
        {:else}
            <a class="ativado" href="/checkup">Healthy Check Up</a>
        {/if}
    {:else}
        <a class="ativado" href="/login">Healthy Check Up</a>
    {/if}
</div>
<LeaderboardMassa></LeaderboardMassa>
<style>
    .bulletpoints {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
    a.desativado{
        width: 100%;
        max-width: 13rem;
        text-align: center;
        color: var(--color-BG);
        font-weight: 600;
        padding: 1em;
        border-radius: 1em;
        text-decoration: none;
        transition: 200ms;
        background: var(--color-BT-OFF);
        cursor: not-allowed;
    }
    .bulletpoints a.ativado {
        width: 100%;
        max-width: 13rem;
        text-align: center;
        color: var(--color-BG);
        font-weight: 600;
        padding: 1em;
        background: var(--color-BT);
        border-radius: 1em;
        text-decoration: none;
        transition: 200ms;
    }
    .bulletpoints a:hover{
        transform: scale(1.02);
    }

    .tooltip{
        position: relative;
        display: inline-block;
        cursor: help;
    }
    .tooltip .tooltiptext{
        visibility: hidden;
        width: 16rem;
        margin-left: -8rem;
        background-color: var(--color-BT-INCORRETO);
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
</style>