<script>
    import QuizMassa from "$components/QuizMassa.svelte";
    import GabaritoMassa from "$components/GabaritoMassa.svelte";
	import { goto } from "$app/navigation";
    import { listaDePerguntas } from "$scripts/perguntas.js";
	import { dinheiro } from "$scripts/stores";
	import { loadFromSessionStorage } from "$scripts/sessionStorage";
	import { saveData } from "$scripts/firebase";

    let perguntasEmbaralhadas = shuffle(listaDePerguntas);
    let metade = Math.floor(listaDePerguntas.length / 2);
    let perguntas = perguntasEmbaralhadas.slice(0, metade);

    // Função para embaralhar um array (algoritmo de Fisher-Yates)
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Troca de lugar
        }
        return array;
    }

    let pergunta_id = 0;
    let acertos = 0;
    let respondeu = false;
    let acertouUltima = false;
    let respostaSelecionada = 0;

    function handleAnswer(e) {
        respostaSelecionada = e.detail;
        const perguntaAtual = perguntas[pergunta_id];
        acertouUltima = respostaSelecionada === perguntaAtual.correta;
        if (acertouUltima) {
            acertos += 1;
        }
        respondeu = true;
    }

    async function handleNextQuestion() {
        if (pergunta_id < perguntas.length - 1) {
            pergunta_id += 1;
            respondeu = false;
            respostaSelecionada = 0;
        } else {
            let texto = `Quiz concluído! Você acertou ${acertos} de ${perguntas.length} perguntas.`;
            sessionStorage.setItem('texto', texto);
            
            dinheiro.update(currentValue => currentValue + acertos);
            const exampleData = {
                name: 'USUÁRIO_ANÔNIMO_3000',
                dinheiro: Number(loadFromSessionStorage("dinheiro") || 0),
                email: 'exemplo@univag.edu.br'
            };
            saveData('users/user1', exampleData);

            goto('/quiz/resultado');
        }
    }
</script>

{#if !respondeu}
    <QuizMassa {pergunta_id} {perguntas} on:answer={handleAnswer} />
{:else}
    <GabaritoMassa {pergunta_id} {perguntas} {acertouUltima} {respostaSelecionada} on:next={handleNextQuestion}></GabaritoMassa>
{/if}