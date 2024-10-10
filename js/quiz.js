// Get elements from the DOM (Document Object Model) using their IDs
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const percentageElement = document.getElementById("percentage");
const finalScoreElement = document.getElementById("final-score");
const homeButton = document.getElementById("home-btn");
const answerImage = document.getElementById("answer-image");

let currentQuestionIndex = 0;  // Tracks the current question index
let score = 0;  // Tracks the score of the user

// Initialize Quiz
function startQuiz() {
    currentQuestionIndex = 0;  // Reset question index
    score = 0;  // Reset score
    answerImage.style.display = "none";  // Hide the image
    nextButton.innerHTML = "Next";  // Set the button text
    showQuestion();  // Display the first question
}

// Display the current question
function showQuestion() {
    resetState();  // Reset the buttons and image for the new question
    let currentQuestion = questions[currentQuestionIndex];  // Get the current question data
    let questionNo = currentQuestionIndex + 1;  // Question number 
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;  // Display question text

    // Create buttons for each answer option
    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;  // Set button text
        button.classList.add("btn");  // Add a CSS class to style the button
        answerButtons.appendChild(button);  

        if (answer.correct) {
            button.dataset.correct = answer.correct;  // Mark correct answers
            button.dataset.image = currentQuestion.image;  // Associate the image with the correct answer
        }

        // Add a click event to handle answer selection
        button.addEventListener("click", selectAnswer);
    });
}

// Reset the buttons and other UI elements for the next question
function resetState() {
    nextButton.style.display = "none";  // Hide next button initially
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);  // Clear previous answer buttons
    }
    answerImage.style.display = "none";  // Hide the image
    const titleElement = document.querySelector(".hero h1");
    titleElement.style.marginTop = "0px";  // Reset margin for the question title
}

// Handle the selection of an answer
function selectAnswer(e) {
    const selectedBtn = e.target;  // The button that was clicked
    const isCorrect = selectedBtn.dataset.correct === "true";  // Check if the selected answer is correct
    const titleElement = document.querySelector(".hero h1");

    if (isCorrect) {
        selectedBtn.classList.add("correct");  // Style the correct answer
        score++;  // Increase score for a correct answer
        answerImage.src = selectedBtn.dataset.image;  // Display the associated image
        answerImage.style.display = "block";  // Show the image
        titleElement.style.marginTop = "100px";  // Adjust margin for the image
    } else {
        selectedBtn.classList.add("incorrect");  // Style the incorrect answer
    }

    // Disable all buttons after selection
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");  // Highlight the correct answer
        }
        button.disabled = true;  // Disable buttons to prevent multiple selections
    });

    nextButton.style.display = "block";  // Show the next button to proceed
}

// Show the final score and play a congratulatory video if the score is high
function showScore() {
    questionElement.parentElement.style.display = "none";  // Hide the question section
    resultContainer.style.display = "flex";  // Display the results section

    const scorePercent = Math.round((score / questions.length) * 100);  // Calculate score percentage

    // Display the score and percentage
    finalScoreElement.innerHTML = `Your Score ${score} out of ${questions.length}`;
    percentageElement.innerHTML = `${scorePercent}%`;

    // Adjust the layout for final score
    const heroElement = document.querySelector('.hero');
    heroElement.style.height = "1090px";
    heroElement.style.marginTop = "110px";  

    document.getElementById('register-btn').style.display = 'block';  // Show the register button

    // Get elements for congratilations video
    const videoElement = document.getElementById('congrats-video');
    const videoSource = document.getElementById('video-source');
    const congratsText = document.getElementById('congrats-text');

    if (scorePercent >= 70) {  // If the user scored 70% or higher
        answerImage.style.display = "none";  // Hide the image
        videoSource.src = "videos/confetti.mp4";  // Set video source to play confetti animation
        videoElement.style.display = "block";  // Show the video
        videoElement.load();  // Load the video
        videoElement.play();  // Optionally auto-play the video
        congratsText.style.display = "block";  // Show congratulations text
    } else {
        // Hide video and text if score is below 70%
        answerImage.style.display = "none";
        videoElement.style.display = "none";
        congratsText.style.display = "none";
    }
}

// Handle the Next button click to show the next question or final score
function handleNextButton() {
    currentQuestionIndex++;  // Move to the next question
    if (currentQuestionIndex < questions.length) {
        showQuestion();  // Show the next question if available
    } else {
        showScore();  // Otherwise, show the final score
    }
}

// Event Listeners for button clicks
nextButton.addEventListener("click", () => {
    handleNextButton();  // Handle clicking the Next button
});

homeButton.addEventListener("click", () => {
    window.location.href = "index.html";  // Redirect to the home page
});

// Start the quiz when the page loads
startQuiz();
