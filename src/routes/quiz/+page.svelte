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
            R1: ":)",
            R2: ":)",
            R3: ":)",
            R4: ":)",
        },
        {
            R1: ":)",
            R2: ":)",
            R3: ":)",
            R4: ":)",
        },
        {
            R1: ":)",
            R2: ":)",
            R3: ":)",
            R4: ":)",
        },
    ]
</script>
<QuizMassa {...perguntas[0]}></QuizMassa>