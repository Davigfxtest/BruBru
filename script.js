alert("Olá Bruna, Vamos iniciar sua prova. você consegue!");

function submitQuiz() {
    const answers = {
        q1: "a",
        q2: "a",
        q3: "c",
        q4: "b",
        q5: "a",
        q6: "b",
        q7: "b",
        q8: "b",
        q9: "b",
        q10: "c"
    };

    let score = 0;
    const totalQuestions = 10;
    let wrongAnswers = []; // Armazena as perguntas erradas

    for (let i = 1; i <= totalQuestions; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        
        if (userAnswer && userAnswer.value === answers[`q${i}`]) {
            score++;
        } else {
            // Armazena a questão errada e a resposta correta
            wrongAnswers.push({
                questionNumber: i,
                correctAnswer: answers[`q${i}`]
            });
        }
    }

    const result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de ${totalQuestions} perguntas.`;

    if (wrongAnswers.length > 0) {
        let wrongList = "<h3>Você errou as seguintes questões:</h3><ul>";
        wrongAnswers.forEach((item) => {
            wrongList += `<li>Questão ${item.questionNumber}: Resposta correta é "${item.correctAnswer}"</li>`;
        });
        wrongList += "</ul>";
        result.innerHTML += wrongList;
        alert ('Você ainda pode melhorar, Só estudar um pouco mais! :)')
    } else {
        result.innerHTML += "<p>Parabéns BruBru! Você acertou todas as perguntas.</p>";
    }

    // Estilo de feedback
    if (score === totalQuestions) {
        result.style.color = "green";
    } else if (score >= totalQuestions / 2) {
        result.style.color = "orange";
    } else {
        result.style.color = "red";
    }
}
