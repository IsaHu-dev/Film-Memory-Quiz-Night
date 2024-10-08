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

// Initialize Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answerImage.style.display = "none";
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Show Question
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

// Reset State (Prepare for the next question)
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    answerImage.style.display = "none";
    const titleElement = document.querySelector(".hero h1");
    titleElement.style.marginTop = "0px";
}

// Handle Answer Selection
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const titleElement = document.querySelector(".hero h1");

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        answerImage.src = selectedBtn.dataset.image;
        answerImage.style.display = "block";
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

// Show Final Score and Video
function showScore() {
    questionElement.parentElement.style.display = "none";
    resultContainer.style.display = "flex";

    const scorePercent = Math.round((score / questions.length) * 100);
    
    finalScoreElement.innerHTML = `Your Score ${score} out of ${questions.length}`;
    percentageElement.innerHTML = `${scorePercent}%`;
    
    // Adjust the .hero height
    const heroElement = document.querySelector('.hero');
    heroElement.style.height = "1090px";  // Adjust height if needed
    heroElement.style.marginTop = "110px";  
    // Show the register button
    document.getElementById('register-btn').style.display = 'block';

    // Get the video element and other elements
    const videoElement = document.getElementById('congrats-video');
    const videoSource = document.getElementById('video-source');
    const congratsText = document.getElementById('congrats-text');

    // Conditionally show a congratulatory video or hide the media
    if (scorePercent >= 70) {
        // Hide the image
        answerImage.style.display = "none";

        // Show the video and set the source to confetti.mp4
        videoSource.src = "videos/confetti.mp4";  // Set the correct path for your video
        videoElement.style.display = "block";
        videoElement.load();  // Load the video
        videoElement.play();  // Optionally auto-play the video

        // Show the congratulations text
        congratsText.style.display = "block";
    } else {
        // Hide both image and video if the score is low
        answerImage.style.display = "none";
        videoElement.style.display = "none";
        congratsText.style.display = "none";  // Hide the text if the score is low
    }
}

// Handle Next Button (Navigate through questions)
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Event Listeners
nextButton.addEventListener("click", () => {
    handleNextButton();
});

homeButton.addEventListener("click", () => {
    window.location.href = "index.html";
});

// Start Quiz
startQuiz();
