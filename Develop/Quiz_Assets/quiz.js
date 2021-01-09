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


var qA = [
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
    currentQuiz.push(qA.sort(() => Math.random() - 0.5));
}

getCurrentQuiz();
console.log(currentQuiz);

function endMessage() {
    counter.textContent = "DONE";
}

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

//How do I create a function where the first index moves to the end?
//Write function that clears page/empty innerHTML of question container - 

//Display Question 1
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


//Function to go to quiz
go.addEventListener("click", function () {
    qA.sort(() => Math.random() - 0.5);
    go.style.display = "none";
    beginTimer();
    displayQuestion(currentQuiz);
})

answerOne.addEventListener("click", function (event) {
    if (answerOne.textContent === currentQuiz[0][0].answer) {
        valid.textContent = "YAY YOU!!"
        currentQuiz[0].push(currentQuiz[0].shift());
        displayQuestion(currentQuiz);
    }
    else {
        time = time - 10;
        counter.textContent = time;
        valid.textContent = "WHOOPSIE DAISIES!";
        currentQuiz[0].push(currentQuiz[0].shift());
        displayQuestion(currentQuiz);
    }
})


//Set Timeout in these functions
answerTwo.addEventListener("click", function (event) {
    if (answerTwo.textContent === currentQuiz[0][0].answer) {
        valid.textContent = "YAY YOU!!"
        currentQuiz[0].push(currentQuiz[0].shift());
        displayQuestion(currentQuiz);
    }
    else {
        time = time - 10;
        counter.textContent = time;
        valid.textContent = "WHOOPSIE DAISIES!";
        currentQuiz[0].push(currentQuiz[0].shift());
        displayQuestion(currentQuiz);
    }
})

answerThree.addEventListener("click", function (event) {
    if (answerThree.textContent === currentQuiz[0][0].answer) {
        valid.textContent = "YAY YOU!!"
        currentQuiz[0].push(currentQuiz[0].shift());
        displayQuestion(currentQuiz);
    }
    else {
        time = time - 10;
        counter.textContent = time;
        valid.textContent = "WHOOPSIE DAISIES!";
        currentQuiz[0].push(currentQuiz[0].shift());
        displayQuestion(currentQuiz);
    }
})

answerFour.addEventListener("click", function (event) {
    if (answerFour.textContent === currentQuiz[0][0].answer) {
        valid.textContent = "YAY YOU!!"
        currentQuiz[0].push(currentQuiz[0].shift());
        displayQuestion(currentQuiz);
    }
    else {
        time = time - 10;
        counter.textContent = time;
        valid.textContent = "WHOOPSIE DAISIES!";
        currentQuiz[0].push(currentQuiz[0].shift());
        displayQuestion(currentQuiz);
    }
})

