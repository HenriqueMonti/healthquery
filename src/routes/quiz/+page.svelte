<script>
    import QuizMassa from "$components/QuizMassa.svelte";
    import GabaritoMassa from "$components/GabaritoMassa.svelte";

    let perguntas = [
        {
            PerguntaEmQuestao: "Pergunta 1?",
            R1: "Resposta 1",
            R2: "Resposta 2",
            R3: "Resposta 3",
            R4: "Resposta 4",
            correta: 1
        },
        {
            PerguntaEmQuestao: "Pergunta 2?",
            R1: ":)",
            R2: ":)",
            R3: ":)",
            R4: ":)",
            correta: 2
        },
        {
            PerguntaEmQuestao: "Pergunta 3?",
            R1: ":)",
            R2: ":)",
            R3: ":)",
            R4: ":)",
            correta: 3
        },
        {
            PerguntaEmQuestao: "Pergunta 4?",
            R1: ":)",
            R2: ":)",
            R3: ":)",
            R4: ":)",
            correta: 4
        },
    ];

    let pergunta_id = 0;
    let acertou = 0;
    let respondeu = false;
    let acertouUltima = false;

    /**
	 * @param {{ detail: any; }} e
	*/
    function handleAnswer(e) {
        const resposta = e.detail;
        const perguntaAtual = perguntas[pergunta_id];
        acertouUltima = resposta === perguntaAtual.correta;
        if (acertouUltima) {
            acertou += 1;
        }
        respondeu = true;
    }

    function handleNextQuestion() {
        if (pergunta_id < perguntas.length - 1) {
            pergunta_id += 1;
            respondeu = false;
        } else {
            alert(`Quiz concluído! Você acertou ${acertou} de ${perguntas.length} perguntas.`);
            window.location.href = "/";
        }
    }
</script>

{#if respondeu}
    <GabaritoMassa 
        {pergunta_id}
        {perguntas}
        {acertouUltima}
        on:next={handleNextQuestion}
    />
{:else}
    <QuizMassa 
        {pergunta_id} 
        {perguntas} 
        on:answer={handleAnswer}
    />
{/if}