//Global Variables
var startButtonEl = document.querySelector("#start-quiz");
var questionContainerEl = document.querySelector(".question-container");
var welcomePageEl = document.querySelector(".welcome-page");
startButtonEl.addEventListener("click", startGame);
var questionEl = document.querySelector("#question");
var answerEl = document.querySelector(".answer-container");
var timeLeftCounter = undefined;

//Questions array
var questions = [
    {
        question: "The DOM is an API that stands for",
        choices: ["Document Option Method", "Document Object Method", "Domaine Object Method", "Document Object Maker"],
        answer: 1
    },
    {
        question: "An array index starts at...",
        choices: ["one", "two", "i++", "zero"],
        answer: 3
    },
    {
        question: "Arrays are enclosed in...",
        choices: ["curly brackets", "parentheses", "square brackets", "angle brackets"],
        answer: 3
    },
    {
        question: "The EL suffix helps you identify an element as...",
        choices: ["An HTML element", "A DOM element", "An Element associated with a specific function", "An HTML element with a css attribute"],
        answer: 1
    },
    {
        question: "A Type of eventListener is a __:",
        choices:["Submit", "Click", "Change", "All of the above"],
        answer: 3
    }

]

//Game question appears and timer starts
function startGame () {
    questionContainerEl.style.display = "block";
    welcomePageEl.style.display= "none";
    showQuestions();
};
//Bring up questions from the questions array
function showQuestions(questions){
questionEl.textContent = questions.question
}