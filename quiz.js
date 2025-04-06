document.addEventListener('DOMContentLoaded', function() {
    const quizSubmit = document.querySelector('.quiz-submit');
    const quizResult = document.querySelector('.quiz-result');
    
    const correctAnswers = {
        q1: 'a', // Markus "Notch" Persson
        q2: 'b', // Smok Endu
        q3: 'b', // Stanie się do góry nogami
        q4: 'b', // Nether
        q5: 'b', // Creeper
        q6: 'b', // Obsydian
        q7: 'b', // Wither
        q8: 'b', // Obsydian
        q9: 'b', // Enderman
        q10: 'b' // Żelazo
    };

    quizSubmit.addEventListener('click', function() {
        let score = 0;
        let totalQuestions = Object.keys(correctAnswers).length;

        for (let question in correctAnswers) {
            const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
            
            if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
                score++;
            }
        }

        const percentage = (score / totalQuestions) * 100;
        let message = '';

        if (percentage === 100) {
            message = 'Brawo! Zdobyłeś 100%! Jesteś prawdziwym ekspertem Minecrafta!';
        } else if (percentage >= 80) {
            message = `Świetnie! Zdobyłeś ${percentage}%! Znasz się na Minecrafcie!`;
        } else if (percentage >= 60) {
            message = `Dobrze! Zdobyłeś ${percentage}%! Nieźle znasz grę!`;
        } else if (percentage >= 40) {
            message = `Nieźle! Zdobyłeś ${percentage}%! Możesz jeszcze trochę poćwiczyć.`;
        } else {
            message = `Zdobyłeś ${percentage}%. Spróbuj jeszcze raz!`;
        }

        quizResult.innerHTML = `
            <div class="result-message">
                <h4>Twój wynik: ${score}/${totalQuestions}</h4>
                <p>${message}</p>
            </div>
        `;
    });
}); 