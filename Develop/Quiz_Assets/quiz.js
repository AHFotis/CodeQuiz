var counter = document.querySelector(".countdown");
var title = document.querySelector(".quiz-header");
var question = document.querySelector(".quiz-body");
var go = document.querySelector(".go");
var answers = document.querySelector(".answers");
var answerButtons = document.querySelector("#ans");
var answerOne = document.querySelector(".answerOne");
var answerTwo = document.querySelector(".answerTwo");
var answerThree = document.querySelector(".answerThree");
var answerFour = document.querySelector(".answerFour");
var valid = document.querySelector(".yes-no");

var time = 60;
var score = 0;

counter.textContent = time;
answers.style.display = "none";

//Function to start timer
function beginTimer() {
var timerGo = setInterval(function() {
    time--;
    counter.textContent = time;

if (time === 0) {
    clearInterval(timerGo);
    //Add Message for Timeout
}    

}, 1000)    
}

//Display Question 1
function displayQuestion() {
    answers.style.display = "inline-block";

    for (i=0; i < 1; i++) {
    //     element = qA[Math.floor(Math.random() * qA.length)]
    console.log(qA[i]);
    question.textContent = qA[i].question;
    
    answerOne.textContent = qA[i].choice1;
    answerTwo.textContent = qA[i].choice2;
    answerThree.textContent = qA[i].choice3;
    answerFour.textContent = qA[i].choice4;
}
}

//Function to go to quiz
go.addEventListener("click", function() {
    qA.sort(() => Math.random() - 0.5);
    go.style.display = "none";
    beginTimer();
    displayQuestion();
})

answerOne.addEventListener("click", function(event) {
    if (answerOne.value === qA[i].answer) {
        valid.textContent = "YAY YOU!!"
    }
    
   else {
        time = time - 10;
        counter.textContent = time;
        valid.textContent = "WHOOPSIE DAISIES!";
        displayQuestion();
    } 
})

var qA = [
    { 
        question: "aaaaaaaaaaaa",
        choice1: "aaaaaaaaaaaa",
        choice2: "bbbbbbbbbbbb",
        choice3: "ccccccccccccc",
        choice4: "dddddddddddddd",
        answer: "aaaaaaaaaaaa"
    },

    {
        question: "bbbbbbbbbbb",
        choice1: "aaaaaaaaaaaa",
        choice2: "bbbbbbbbbbbb",
        choice3: "ccccccccccccc",
        choice4: "dddddddddddddd",
        answer: "choice2"
    },
    {
        question: "ccccccccccc",
        choice1: "aaaaaaaaaaaa",
        choice2: "bbbbbbbbbbbb",
        choice3: "ccccccccccccc",
        choice4: "dddddddddddddd",
        answer: "choice3"
    }

]