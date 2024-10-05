/* jshint esversion: 6 */
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const percentageElement = document.getElementById("percentage");
const finalScoreElement = document.getElementById("final-score");
const homeButton = document.getElementById("home-btn");
const answerImage = document.getElementById("answer-image");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answerImage.style.display = "none";
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            button.dataset.image = currentQuestion.image;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    answerImage.style.display = "none";

    // Reset the title margin if the image is hidden
    const titleElement = document.querySelector(".hero h1");
    titleElement.style.marginTop = "0px";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const titleElement = document.querySelector(".hero h1"); // Select the title element

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        answerImage.src = selectedBtn.dataset.image;
        answerImage.style.display = "block";

        // Film Memory Title  margin-top
        titleElement.style.marginTop = "100px"; 
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
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
    
    finalScoreElement.innerHTML = `Your Score ${score} out of ${questions.length}`;
    percentageElement.innerHTML = `${scorePercent}%`;
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

homeButton.addEventListener("click", () => {
    window.location.href = "index.html";
});

startQuiz();