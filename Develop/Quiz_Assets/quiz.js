var counter = document.querySelector(".countdown");
var title = document.querySelector(".quiz-header");
var question = document.querySelector(".quiz-body");
var go = document.querySelector(".go");
var answers = document.querySelector(".answers");
// var answerButtons = document.querySelector("#ans");
var answerOne = document.querySelector(".answerOne");
var answerTwo = document.querySelector(".answerTwo");
var answerThree = document.querySelector(".answerThree");
var answerFour = document.querySelector(".answerFour");
var valid = document.querySelector(".yes-no");


var questionAnswer = [
    {
        question: "a",
        choice1: "aaaaaaaaaaaa",
        choice2: "bbbbbbbbbbbb",
        choice3: "ccccccccccccc",
        choice4: "dddddddddddddd",
        answer: "aaaaaaaaaaaa"
    },

    {
        question: "b",
        choice1: "aaaaaaaaaaaa",
        choice2: "bbbbbbbbbbbb",
        choice3: "ccccccccccccc",
        choice4: "dddddddddddddd",
        answer: "bbbbbbbbbbbb"
    },
    {
        question: "c",
        choice1: "aaaaaaaaaaaa",
        choice2: "bbbbbbbbbbbb",
        choice3: "ccccccccccccc",
        choice4: "dddddddddddddd",
        answer: "ccccccccccccc"
    }

]


var time = 60;
var score = 0;

counter.textContent = time;
answers.style.display = "none";
var currentQuiz = [];


//Function to set up order of questions per quiz
function getCurrentQuiz() {
    currentQuiz.push(questionAnswer.sort(() => Math.random() - 0.5));
}

getCurrentQuiz();
console.log(currentQuiz);



//Function to start timer
function beginTimer() {
    var timerGo = setInterval(function () {
        time--;
        counter.textContent = time;

        if (time <= 0) {
            clearInterval(timerGo);
            endMessage();
            //Add Message for Timeout
        }

    }, 1000)
}


//Tutor for: timer going below zero; clarifying how scoring should work.
//var removed = array.splice(0,2) = how to splice if you need that.

//Display Questions
function displayQuestion(arr) {
    answers.style.display = "inline-block";

    for (i = 0; i < 1; i++) {

        question.textContent = arr[0][0].question;

        answerOne.textContent = arr[0][0].choice1;
        answerTwo.textContent = arr[0][0].choice2;
        answerThree.textContent = arr[0][0].choice3;
        answerFour.textContent = arr[0][0].choice4;
    }
}

function nextQuestion() {
    var buffer = 1;
    var reset = setInterval(function() {

        buffer -= 1;
        
        if (buffer === 0) {
            clearInterval(reset);
            valid.textContent = " ";
            currentQuiz[0].push(currentQuiz[0].shift());
            displayQuestion(currentQuiz);
        }

    }, 750)
}

//Game Over
function endMessage() {
    counter.textContent = "DONE";
    answers.style.display = "none";
    title.textContent = "Game Over";
    question.textContent = "Well done! Your score is " + score
+ "! Please enter your name and score below!"
}

//Function to go to quiz
go.addEventListener("click", function () {
    go.style.display = "none";
    beginTimer();
    displayQuestion(currentQuiz);
})

answerOne.addEventListener("click", function () {
    if (answerOne.textContent === currentQuiz[0][0].answer) {
        score++;
        valid.textContent = "YAY YOU!!"
        nextQuestion();
        
    }
    else {
        time = time - 10;
        counter.textContent = time;
        valid.textContent = "WHOOPSIE DAISIES!";
        nextQuestion();
        
    }
})


//Set Timeout in these functions
answerTwo.addEventListener("click", function () {
    if (answerTwo.textContent === currentQuiz[0][0].answer) {
        score++;
        valid.textContent = "YAY YOU!!"
        nextQuestion();
        
    }
    else {
        time = time - 10;
        counter.textContent = time;
        valid.textContent = "WHOOPSIE DAISIES!";
        nextQuestion();
        
    }
})

answerThree.addEventListener("click", function () {
    if (answerThree.textContent === currentQuiz[0][0].answer) {
        score++;
        valid.textContent = "YAY YOU!!"
        nextQuestion();
        
    }
    else {
        time = time - 10;
        counter.textContent = time;
        valid.textContent = "WHOOPSIE DAISIES!";
        nextQuestion();
        
    }
})

answerFour.addEventListener("click", function () {
    if (answerFour.textContent === currentQuiz[0][0].answer) {
        score++;
        valid.textContent = "YAY YOU!!"
        nextQuestion();
        
    }
    else {
        time = time - 10;
        counter.textContent = time;
        valid.textContent = "WHOOPSIE DAISIES!";
        nextQuestion();
        
    }
})

console.log(score);