<script>
    import QuizMassa from "$components/QuizMassa.svelte";

    let perguntas = [
        {
            PerguntaEmQuestao: "Pergunta 1?",
            R1: "Resposta 1",
            R2: "Resposta 2",
            R3: "Resposta 3",
            R4: "Resposta 4",
        },
        {
            PerguntaEmQuestao: "Pergunta 2?",
            R1: ":)",
            R2: ":)",
            R3: ":)",
            R4: ":)",
        },
        {
            PerguntaEmQuestao: "Pergunta 3?",
            R1: ":)",
            R2: ":)",
            R3: ":)",
            R4: ":)",
        },
        {
            PerguntaEmQuestao: "Pergunta 4?",
            R1: ":)",
            R2: ":)",
            R3: ":)",
            R4: ":)",
        },
    ];

    let pergunta_id = 0;

    function handleNextQuestion() {
        if (pergunta_id < perguntas.length - 1) {
            pergunta_id += 1;
        } else {
            // Quando todas as perguntas forem respondidas
            alert("Quiz concluído!");
            window.location.href = "/";
        }
    }
</script>

<QuizMassa {pergunta_id} {perguntas} on:next={handleNextQuestion}></QuizMassa>
