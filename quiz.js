const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons"); 
const nextButton = document.getElementById("next-btn"); 
const resultContainer = document.getElementById("result-container");
const percentageElement = document.getElementById("percentage"); // Element to display percentage score
const finalScoreElement = document.getElementById("final-score"); // Element to display final score text
const retryButton = document.getElementById("retry-btn"); // "Go Again" button for restarting the quiz
const homeButton = document.getElementById("home-btn"); // Button to redirect to the home page

// Variables to keep track of the current question and the score
let currentQuestionIndex = 0; // Tracks which question we are on
let score = 0; // Tracks the player's score

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Function to display the current question and answer choices
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
        }
        button.addEventListener("click", selectAnswer); // Add an event listener to handle the answer selection
    });
}

// Function to reset the state for the next question
function resetState() {
    nextButton.style.display = "none"; // Hide the "Next" button until an answer is selected
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild); // Remove any answer buttons from the previous question
    }
}

// Function to handle the answer selection
function selectAnswer(e) {
    const selectedBtn = e.target; // Get the button that was clicked
    const isCorrect = selectedBtn.dataset.correct === "true"; // Check if the selected answer is correct
    if (isCorrect) {
        selectedBtn.classList.add("correct"); // Add the "correct" class to highlight the correct answer
        score++; // Increment the score if the answer is correct
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

// Event listener for the "Next" button click
nextButton.addEventListener("click", () => {
    handleNextButton(); // Call the function to move to the next question or show the score
});

// Event listener for the "Retry" button to restart the quiz
retryButton.addEventListener("click", () => {
    startQuiz(); // Restart the quiz when "Retry" is clicked
});

// Event listener for the "Home" button to go back to the homepage
homeButton.addEventListener("click", () => {
    window.location.href = "index.html"; // Redirect to the home page (adjust this URL as needed)
});

// Start the quiz immediately when the page loads
startQuiz();
