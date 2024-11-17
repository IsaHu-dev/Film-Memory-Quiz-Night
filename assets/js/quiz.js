// Assign DOM elements to constants in the global scope
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const percentageElement = document.getElementById("percentage");
const finalScoreElement = document.getElementById("final-score");
const homeButton = document.getElementById("home-btn");
const answerImage = document.getElementById("answer-image");
const titleElement = document.querySelector(".hero h1");
const heroElement = document.querySelector('.hero');
const registerButton = document.getElementById('register-btn');
const videoElement = document.getElementById('congrats-video');
const videoSource = document.getElementById('video-source');
const congratsText = document.getElementById('congrats-text');

let currentQuestionIndex = 0;
let score = 0;

// Initialize Quiz
function startQuiz()
{
	currentQuestionIndex = 0;
	score = 0;
	answerImage.style.display = "none";
	nextButton.innerHTML = "Next";
	showQuestion();
}

// Display the current question and generate answer buttons
function showQuestion()
{
	resetState();
	const currentQuestion = questions[currentQuestionIndex];
	const questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

	currentQuestion.answers.forEach((answer) =>
	{
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButtons.appendChild(button);

		if (answer.correct)
		{
			button.dataset.correct = answer.correct;
			button.dataset.image = currentQuestion.image;
		}

		button.addEventListener("click", selectAnswer);
	});
}

// Reset UI for the next question
function resetState()
{
	nextButton.style.display = "none";
	while (answerButtons.firstChild)
	{
		answerButtons.removeChild(answerButtons.firstChild);
	}
	answerImage.style.display = "none";
}

// Handle answer selection and disable buttons after selection
function selectAnswer(e)
{
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct === "true";

	if (isCorrect)
	{
		selectedBtn.classList.add("correct");
		score++;
		answerImage.src = selectedBtn.dataset.image;
		answerImage.style.display = "block";
		titleElement.style.marginTop = "60px";
	}
	else
	{
		selectedBtn.classList.add("incorrect");
	}

	Array.from(answerButtons.children).forEach((button) =>
	{
		if (button.dataset.correct === "true")
		{
			button.classList.add("correct");
		}
		button.disabled = true;
	});

	nextButton.style.display = "block";
}

// Display the final score and optional video for high scores
function showScore()
{
	questionElement.parentElement.style.display = "none";
	resultContainer.style.display = "flex";

	const scorePercent = Math.round((score / questions.length) * 100);
	finalScoreElement.innerHTML = `Your Score ${score} out of ${questions.length}`;
	percentageElement.innerHTML = `${scorePercent}%`;

	heroElement.style.height = "1090px";
	heroElement.style.marginTop = "110px";
	registerButton.style.display = 'block';

	if (scorePercent >= 70)
	{
		answerImage.style.display = "none";
		videoSource.src = "videos/confetti.mp4";
		videoElement.style.display = "block";
		videoElement.load();
		videoElement.play();
		congratsText.style.display = "block";
	}
	else
	{
		answerImage.style.display = "none";
		videoElement.style.display = "none";
		congratsText.style.display = "none";
	}
}

// Handle the Next button to show the next question or final score
function handleNextButton()
{
	currentQuestionIndex++;
	if (currentQuestionIndex < questions.length)
	{
		showQuestion();
	}
	else
	{
		showScore();
	}
}

// Event Listeners for button clicks
nextButton.addEventListener("click", handleNextButton);
homeButton.addEventListener("click", () =>
{
	window.location.href = "index.html";
});

// Start the quiz on page load
startQuiz();