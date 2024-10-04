// Assuming questions.js is loaded before quiz.js
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container"); // The container that holds the result (percentage and score)
const percentageElement = document.getElementById("percentage"); // Element to display percentage score
const finalScoreElement = document.getElementById("final-score"); // Element to display final score text
const retryButton = document.getElementById("retry-btn"); // "Go Again" button for restarting the quiz
const homeButton = document.getElementById("home-btn"); // Button to redirect to the home page

let questionNo = currentQuestionIndex + 1;


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    questionElement.parentElement.style.display = "none";
    resultContainer.style.display = "flex";

    const scorePercent = Math.round((score / questions.length) * 100);
    percentageElement.innerHTML = `${scorePercent}%`;
    finalScoreElement.innerHTML = `Your Score ${score} out of ${questions.length}`;
}

function handleNextButton() {
    currentQuestionIndex++; 
    if (currentQuestionIndex < questions.length) {
        showQuestion(); 
    } else {
        showScore(); 
    }
}


nextButton.addEventListener("click", () => {
    handleNextButton(); 
});


retryButton.addEventListener("click", () => {
    startQuiz(); 
});


homeButton.addEventListener("click", () => {
    window.location.href = "index.html"; 
});


startQuiz();
