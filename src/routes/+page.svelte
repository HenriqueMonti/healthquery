<script>
	import LeaderboardMassa from "$components/LeaderboardMassa.svelte";
</script>
<div class="bulletpoints">
    <a href="/quiz">Healthy Quiz</a>
    <a href="/checkup">Healthy Check Up</a>
</div>
<LeaderboardMassa></LeaderboardMassa>
<style>
    .bulletpoints {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }
    .bulletpoints a {
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
</style>