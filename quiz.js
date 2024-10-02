// quiz.js

// Select elements from the DOM
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;  // Index of current question
let score = 0;  // User's score

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;  // Reset to first question
    score = 0;  // Reset score
    nextButton.innerHTML = "Next";  // Set initial button text
    showQuestion();  // Display the first question
}
function showQuestion() {


// Clear previous answers
function resetState() {




function selectAnswer(e) {
        
        
function handleNextButton() {


function showScore() {


nextButton.addEventListener("click", () => {    


startQuiz();