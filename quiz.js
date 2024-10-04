// Assuming questions.js is loaded before quiz.js
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container"); // The container that holds the result (percentage and score)
const percentageElement = document.getElementById("percentage"); // Element to display percentage score

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

// Function to display the score at the end of the quiz
function showScore() {
    questionElement.parentElement.style.display = "none"; // Hide the question and answer section
    resultContainer.style.display = "flex"; // Show the result container

    // Calculate and display the score percentage
    const scorePercent = Math.round((score / questions.length) * 100); // Calculate percentage score
    percentageElement.innerHTML = `${scorePercent}%`; // Display the percentage score
    finalScoreElement.innerHTML = `Your Score ${score} out of ${questions.length}`; // Display the final score
}

// Function to handle the "Next" button click
function handleNextButton() {
    currentQuestionIndex++; // Move to the next question
    if (currentQuestionIndex < questions.length) {
        showQuestion(); // If there are more questions, show the next question
    } else {
        showScore(); // If no more questions, show the final score
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
