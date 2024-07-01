<script>
	import { consoleWarn, consoleError } from "$scripts/consoleUtils";
	import { database } from "$scripts/firebaseInit";
	import { ref, orderByChild, query, get } from "firebase/database";
    import loading from "$lib/images/loading.gif";

    async function getLeaderboard(top) {
        try {
            const userRef = ref(database, 'users');
            const q = query(userRef, orderByChild('dinheiro'));
            const querySnapshot = await get(q);

            if (querySnapshot.exists()) {
                const users = Object.values(querySnapshot.val())
                .map(user => user[Object.keys(user)[0]])
                .sort((a, b) => b.dinheiro - a.dinheiro)
                .slice(0,top)
                return new Promise((r) => {
                    return setTimeout(() => {r(users)}, 1000)
                })
            } else {
                consoleWarn('Snapshot da query não encontrada.');
                return null;
            }
        } catch (error) {
            consoleError('Erro ao obter dados: ', error);
            return null;
        }
    }

    function truncateUsername(username, maxLength){
        if (username.length > maxLength) {
            return username.substring(0, maxLength) + "..."
        }
        return username
    }

    let usuarios = getLeaderboard(5);

    let cores_medalha = ["gold", "silver", "brown"];
</script>

<div>
    {#await usuarios}
    <img src={loading} alt="">
    {:then value}
        <h1>Placar global</h1>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {#each value as usuario, index}
                    <tr>
                        <td>
                            {#if index < 3}
                                <i class="fa-solid fa-medal" style="color: {cores_medalha[index]};"></i>
                            {:else}
                                <i class="fa-solid fa-medal" style="color: transparent;"></i>
                            {/if}
                            {truncateUsername(usuario.nome, 25)}
                        </td>
                        <td class="nobreak">{usuario.dinheiro} <i class="fa-solid fa-circle-dollar-to-slot"></i></td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {/await}
</div>

<style>
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 50vh;
        padding: 0 1rem;
        gap: 1rem;
        margin-top: 1rem;
    }
    table{
        width: 100%;
        max-width: 75%;
        border-collapse: collapse;
    }
    th, td{
        border: 0.1px solid #ddd;
        padding: 8px;
        white-space: nowrap;
    }
    th{
        background-color: #f2f2f2;
    }
    .nobreak{
        display: flex;
        gap: 5px;
    }
</style>