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

    var element = [];

    for (i=0; i < 1; i++) {
        element.push(qA[i]);
    }
    console.log(element);
    console.log(element[0])

    question.textContent = element[0].question;
    
    answerOne.textContent = element[0].choice1;
    answerTwo.textContent = element[0].choice2;
    answerThree.textContent = element[0].choice3;
    answerFour.textContent = element[0].choice4;
  
    // question.textContent = "Question Will Go Here";

    
    // answers.style.display = "inline-block";
    // answerOne.textContent = "Answer 1";
    // answerTwo.textContent = "Answer 2";
    // answerThree.textContent = "Answer 3";
    // answerFour.textContent = "Answer 4";

}

//Function to go to quiz
go.addEventListener("click", function(event) {
    
    go.style.display = "none";
    beginTimer();
    displayQuestion();
})

answerButtons.addEventListener("click", function(event) {
    if (event.target = answerThree) {
        valid.textContent = "YAY YOU!!"
    }
    
   else {
        time = time - 10;
        counter.textContent = time;
        valid.textContent = "WHOOPSIE DAISIES!";
    } 
})

var qA = [
    { 
        question: "aaaaaaaaaaaa",
        choice1: "aaaaaaaaaaaa",
        choice2: "bbbbbbbbbbbb",
        choice3: "ccccccccccccc",
        choice4: "dddddddddddddd",
        answer: "choice1"
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