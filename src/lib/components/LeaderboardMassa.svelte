<script>
	import { auth } from '$scripts/firebaseInit';

    //TODO: SELECT Nos usuários reais do banco
    let usuarios_exemplo = [
        {nome: "Shimo", dinheiro: 150},
        {nome: "Bob", dinheiro: 200},
        {nome: "Carlos", dinheiro: 100},
        {nome: "Dilma", dinheiro: 250}
    ];

    let cores_medalha = ["gold", "silver", "brown"];

    usuarios_exemplo.sort((a, b) => b.dinheiro - a.dinheiro)
</script>
<style>
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
    }
    table{
        width: 50%;
        border-collapse: collapse;
    }
    th, td{
        border: 1px solid #ddd;
        padding: 8px;
    }
    th{
        background-color: #f2f2f2;
    }
</style>

{#if auth.currentUser}
<div>
    <h1>Placar de exemplo</h1>
    <table>
        <thead>
            <tr>
                <th style="border: none; background-color: transparent;"></th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {#each usuarios_exemplo as usuario, index}
                <tr>
                    {#if index < 3}
                        <i class="fa-solid fa-medal" style="color: {cores_medalha[index]};"></i>
                    {:else}
                        <i></i>
                    {/if}
                    <td>{usuario.nome}</td>
                    <td>{usuario.dinheiro} <i class="fa-solid fa-circle-dollar-to-slot"></i></td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
{/if}