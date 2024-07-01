<script>
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { auth } from "$scripts/firebaseInit";
	import { dinheiro } from "$scripts/stores";
</script>
<footer>
    <h3>
        {#if $page.url.pathname !== "/login" && $page.url.pathname !== "/register" && auth.currentUser}
            <h2>{$dinheiro} <i class="fa-solid fa-circle-dollar-to-slot"></i></h2>
        {/if}
    </h3>
</footer>
<style>
    footer{
        display: none;
        color: var(--color-BG);
        background-color: var(--color-HEADER);
        padding: 1rem;
        width: 100%;
        position: fixed;
        bottom: 0px;
    }

    @media (max-width: 480px) {
        footer {
            display: block;
        }
    }
</style>