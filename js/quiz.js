// Grabbing elements from the DOM (HTML document)
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const percentageElement = document.getElementById("percentage");
const finalScoreElement = document.getElementById("final-score");
const retryButton = document.getElementById("retry-btn");
const homeButton = document.getElementById("home-btn");
const answerImage = document.getElementById("answer-image"); // Image placeholder

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answerImage.style.display = "none"; // Hide image initially
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState(); // Reset the state to clear previous answers
    let currentQuestion = questions[currentQuestionIndex]; // Get the current question
    let questionNo = currentQuestionIndex + 1; // Calculate the question number
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Display the current question with its number

    // Loop through each answer option and create a button for each one
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); // Create a button for each answer
        button.innerHTML = answer.text; // Set the answer text in the button
        button.classList.add("btn"); // Add the "btn" class for styling
        answerButtons.appendChild(button); // Add the button to the answer-buttons container
        if (answer.correct) {
            button.dataset.correct = answer.correct; // Add a data attribute to mark the correct answer
            button.dataset.image = currentQuestion.image; // Add the correct image
        }
        button.addEventListener("click", selectAnswer); // Add an event listener to handle the answer selection
    });
}

function resetState() {
    nextButton.style.display = "none"; // Hide the "Next" button until an answer is selected
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild); // Remove any answer buttons from the previous question
    }
    answerImage.style.display = "none"; // Hide the image when moving to the next question
}

function selectAnswer(e) {
    const selectedBtn = e.target; // Get the button that was clicked
    const isCorrect = selectedBtn.dataset.correct === "true"; // Check if the selected answer is correct
    if (isCorrect) {
        selectedBtn.classList.add("correct"); // Add the "correct" class to highlight the correct answer
        score++; // Increment the score if the answer is correct

        // Display the corresponding image if the answer is correct
        answerImage.src = selectedBtn.dataset.image;
        answerImage.style.display = "block";
    } else {
        selectedBtn.classList.add("incorrect"); // Add the "incorrect" class to highlight the wrong answer
    }
    // Loop through all answer buttons and highlight the correct answer, disable all buttons
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); // Highlight the correct answer
        }
        button.disabled = true; // Disable all buttons to prevent multiple selections
    });
    nextButton.style.display = "block"; // Show the "Next" button after an answer is selected
}

function showScore() {
    questionElement.parentElement.style.display = "none"; // Hide the question and answer section
    resultContainer.style.display = "flex"; // Show the result container

    // Calculate and display the score percentage
    const scorePercent = Math.round((score / questions.length) * 100); // Calculate percentage score
    percentageElement.innerHTML = `${scorePercent}%`; // Display the percentage score
    finalScoreElement.innerHTML = `Your Score ${score} out of ${questions.length}`; // Display the final score
}

function handleNextButton() {
    currentQuestionIndex++; // Move to the next question
    if (currentQuestionIndex < questions.length) {
        showQuestion(); // If there are more questions, show the next question
    } else {
        showScore(); // If no more questions, show the final score
    }
}

nextButton.addEventListener("click", () => {
    handleNextButton(); // Call the function to move to the next question or show the score
});

homeButton.addEventListener("click", () => {
    window.location.href = "index.html"; // Redirect to the home page (adjust this URL as needed)
});

startQuiz();
