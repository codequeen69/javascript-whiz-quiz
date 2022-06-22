//Global Variables\
var highScore = undefined;
var startButtonEl = document.querySelector("#start-quiz");
var questionContainerEl = document.querySelector(".question-container");
var welcomePageEl = document.querySelector(".welcome-page");
startButtonEl.addEventListener("click", startGame);
var questionEl = document.querySelector("#question");
var choiceEl = document.querySelector(".choice-container");
var timeSeconds = 60;
var index = 0;
var countDownEl= document.querySelector('#count-down');



//Questions array
var questions = [
    {
        question: "The DOM is an API that stands for...",
        choices: ["Document Option Method", "Document Object Method", "Domaine Object Method", "Document Object Maker"],
        answer: "Document Object Method"
    },
    {
        question: "An array index starts at...",
        choices: ["one", "two", "i++", "zero"],
        answer: "zero"
    },
    {
        question: "Arrays are enclosed in...",
        choices: ["curly brackets", "parentheses", "square brackets", "angle brackets"],
        answer: "square brackets"
    },
    {
        question: "The EL suffix helps you identify an element as...",
        choices: ["An HTML element", "A DOM element", "An Element associated with a specific function", "An HTML element with a css attribute"],
        answer: "A DOM element"
    },
    {
        question: "A Type of eventListener is a __:",
        choices:["Submit", "Click", "Change", "All of the above"],
        answer: "All of the above"
    }

]

//Game question appears and timer starts
function startGame () {
    questionContainerEl.style.display = "block";
    welcomePageEl.style.display= "none";
    displayQuestion();
    countDown();
   
};
function displayQuestion(){
//create question
var questionEl= document.createElement("h2");
questionEl.innerHTML = questions[index].question;
document.getElementById("question").appendChild(questionEl);


//create choice buttons
for (var i=0; i< questions[index].choices.length; i++){
var choiceButton = document.createElement("button");
choiceButton.className= "choice-button";
document.querySelector(".choice-container").appendChild(choiceButton);
choiceButton.textContent = questions[index].choices[i]
choiceButton.addEventListener("click", checkAnswer);
}
}
function checkAnswer(event){
var correctAnswer = questions[index].answer;
correctAnswer.className ="correct-answer"
var clickedAnswer = event.target.textContent;
if (correctAnswer === clickedAnswer){

}
else{
    timeSeconds= timeSeconds - 10;

}
questionEl.innerHTML="";
choiceEl.innerHTML ="";
index++;
displayQuestion();
}
//loop through array questions and answers
function showNextQuestion(questions){
    for (var i=0; i < questions[index].length; i++){
         questionEl= questions[index].question;
         choiceEl = questions[index].choices;
    }
}
function countDown(){
timeInterval= setInterval (function(){
    if (timeSeconds >1){
    countDownEl.textContent = timeSeconds + " seconds left";
    timeSeconds--;
    }
    else if(timeSeconds === 1){
        countDownEl.textContent = timeSeconds + " second left";
        timeSeconds--;
    }
    else {
        countDownEl.textContent ='TIME UP!';
    }

}, 1000)
}