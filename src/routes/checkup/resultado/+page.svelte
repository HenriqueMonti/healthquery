<script>
    import xd from "$lib/images/hqclubp.gif";
</script>

<div class="bulletpoints">
    <h1>Obrigado por sua atenção!</h1>
    <h3>Volte aqui semana que vem para continuar atualizado sobre sua saúde!</h3>
    <a href="/">Voltar ao Início</a>
    <img src={xd} alt="">
</div>
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