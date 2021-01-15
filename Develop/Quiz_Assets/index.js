
//Collection of selectors
var counter = document.querySelector(".countdown");
var title = document.querySelector(".quiz-header");
var question = document.querySelector(".quiz-body");
var go = document.querySelector(".go");

var answers = document.querySelector(".answers");
var answerOne = document.querySelector(".answerOne");
var answerTwo = document.querySelector(".answerTwo");
var answerThree = document.querySelector(".answerThree");
var answerFour = document.querySelector(".answerFour");
var valid = document.querySelector(".yes-no");

var finalScore = document.querySelector(".score");
var submitScore = document.querySelector(".submit");
var nameInput = document.querySelector(".name");

//Array of question objects
var questionAnswer = [
    {
        question: "Which of the following HTML elements does NOT need a closing tag?",
        choice1: "<div>",
        choice2: "<h1>",
        choice3: "<img>",
        choice4: "<button>",
        answer: "<img>"
    },

    {
        question: "What speficic CSS property would you use to center an element in it's parent element?",
        choice1: "margin: 0 auto;",
        choice2: "padding: 50px 50px;",
        choice3: "position: relative;",
        choice4: "margin: 0;",
        answer: "margin: 0 auto;"
    },
    {
        question: "In Javascript, what do we use to store multiple values in a single variable?",
        choice1: "For Loops",
        choice2: "Functions",
        choice3: "Objects",
        choice4: "Arrays",
        answer: "Arrays"
    },
    {
        question: "A JavaScript Object gets wrapped in...",
        choice1: "[ ]",
        choice2: "{ }",
        choice3: "( )",
        choice4: "< >",
        answer: "{ }"
    },
    {
        question: "How would you call the function 'takeQuiz'?",
        choice1: "return takeQuiz",
        choice2: "console.log(takeQuiz)",
        choice3: "takeQuiz();",
        choice4: "function takeQuiz() {}",
        answer: "takeQuiz();"
    },
    {
        question: "What JavaScript method would you use to add or change an attribute in an element?",
        choice1: "element.getAttribute()",
        choice2: "element.setAttribute()",
        choice3: "element.querySelector()",
        choice4: "element.getElementById()",
        answer: "element.setAttribute()"
    },
    {
        question: "Which of these is an example of semantic HTML?",
        choice1: "<div>",
        choice2: "<section>",
        choice3: "<p>",
        choice4: "<body>",
        answer: "<section>"
    },
    {
        question: "Which JavaScript method can be used in place of a for loop?",
        choice1: "forEach()",
        choice2: "splice()",
        choice3: "map()",
        choice4: "push()",
        answer: "forEach()"
    },
    {
        question: "What does CDN stand for",
        choice1: "Common Data Needs",
        choice2: "Content Delivery Network",
        choice3: "CSS Delivery Network",
        choice4: "Coding Destination Niche",
        answer: "Content Delivery Network"
    },
    {
        question: "Which JavaScript method adds one or more elements to the beginning of an array and returns the new length of the array?",
        choice1: ".fill();",
        choice2: "unshift()",
        choice3: ".pop()",
        choice4: ".slice()",
        answer: "unshift()"
    },
    {
        question: "If you want your element to stay fixed on the page despite scrolling, you would use the position property with the value...",
        choice1: "absolute",
        choice2: "relative",
        choice3: "static",
        choice4: "fixed",
        answer: "fixed"
    },
    {
        question: "How would you get a random number between 1 and 8 in JavaScript?",
        choice1: "Math.floor(Math.random() * 8) + 1",
        choice2: "getRandom(8);",
        choice3: "Math.floor(Math.random())",
        choice4: "num <= 8 && num >= 1",
        answer: "Math.floor(Math.random() * 8)"
    },
    {
        question: "Which HTML tag would you use to create a numbered list?",
        choice1: "<ul>",
        choice2: "<ol>",
        choice3: "<li>",
        choice4: "<input>",
        answer: "<ol>"
    },
    {
        question: "In the CSS Box Model, what does 'padding' refer to?",
        choice1: "The area outside the border",
        choice2: "The area between the border and the margin",
        choice3: "The area between the content and the border",
        choice4: "The area inside the content",
        answer: "The area between the content and the border"
    },
    {
        question: "What does DOM stand for?",
        choice1: "Document Object Model",
        choice2: "Destination Orientation Module",
        choice3: "Document Operator Mechanism",
        choice4: "Driven Object Meter",
        answer: "Document Object Model"
    },
    {
        question: "CSS Selector '.header' would style all elements...",
        choice1: "Inside a <header> tag",
        choice2: "With the attribute class='header'",
        choice3: "Inside an <h1> tag",
        choice4: "With the attribute id='header'",
        answer: "With the attribute class='header'"
    },
    {
        question: "What would the CSS property 'color' affect?",
        choice1: "The background color of the page",
        choice2: "The color of the text on the whole page",
        choice3: "The color of the text within that selector",
        choice4: "The background color within that selector",
        answer: "The color of the text within that selector"
    }


]

//Golbal Variables
var time = 75;
var score = 0;
var currentQuiz = [];

//Page settings at start
counter.textContent = time;
answers.style.display = "none";
finalScore.style.display = "none";


//Function to set up order of questions per quiz
function getCurrentQuiz() {
    currentQuiz.push(questionAnswer.sort(() => Math.random() - 0.5));
}
getCurrentQuiz();


//Function to start timer
function beginTimer() {
    var timerGo = setInterval(function () {
        time--;
        counter.textContent = time;

        if (time === 0 || time <= 0) {
            clearInterval(timerGo);
            endMessage();
        }

    }, 1000)
}

//Display Questions
function displayQuestion(arr) {
    answers.style.display = "inline-block";

    question.textContent = arr[0][0].question;
    answerOne.textContent = arr[0][0].choice1;
    answerTwo.textContent = arr[0][0].choice2;
    answerThree.textContent = arr[0][0].choice3;
    answerFour.textContent = arr[0][0].choice4;
}

//Function for validation timer
function alertTimer() {
    var buffer = 1;
    var reset = setInterval(function () {

        buffer -= 1;

        if (buffer === 0) {
            clearInterval(reset);
            valid.textContent = " ";
        }

    }, 750)
}

//Function for user wrong answer
function wrongAnswer() {
    if (time <= 10) {
        time = 0;
    } else {
        time -= 10;
    }
    counter.textContent = time;
    valid.textContent = "WHOOPSIE DAISIES!";
}

//Go to next question
function nextQuestion() {
    var removed = currentQuiz[0].splice(0, 1);

    if (currentQuiz[0].length === 0) {
        score = time;
        answers.style.display = "none";
        time = 0;
        endMessage();
    } else {
        displayQuestion(currentQuiz);
    }
}

//Game Over
function endMessage() {
    counter.textContent = "DONE";
    answers.style.display = "none";
    finalScore.style.display = "inline";
    title.textContent = "Game Over";

    if (score > 0) {
        question.innerHTML = "Well done! Your score is " + score
            + "! Please enter your name below to save it to our High Scores page!";
    } else {
        question.innerHTML = "Oops! Your score is " + score
            + "! Enter your name if you want to save it I guess...";
    }
}

//Event Listeners
go.addEventListener("click", function () {
    title.textContent = "";
    go.style.display = "none";
    beginTimer();
    displayQuestion(currentQuiz);
})

answerOne.addEventListener("click", function () {
    if (answerOne.textContent === currentQuiz[0][0].answer) {
        valid.textContent = "YES! CORRECT!!!"
        alertTimer();
        nextQuestion();

    }
    else {
        wrongAnswer();
        alertTimer();
        nextQuestion();

    }
})


answerTwo.addEventListener("click", function () {
    if (answerTwo.textContent === currentQuiz[0][0].answer) {
        valid.textContent = "YES! CORRECT!!!"
        alertTimer();
        nextQuestion();

    }
    else {
        wrongAnswer();
        alertTimer();
        nextQuestion();
    }
})

answerThree.addEventListener("click", function () {
    if (answerThree.textContent === currentQuiz[0][0].answer) {
        valid.textContent = "YES! CORRECT!!!"
        alertTimer();
        nextQuestion();
    }
    else {
        wrongAnswer();
        alertTimer();
        nextQuestion();
    }
})

answerFour.addEventListener("click", function () {
    if (answerFour.textContent === currentQuiz[0][0].answer) {
        valid.textContent = "YES! CORRECT!!!"
        alertTimer();
        nextQuestion();

    }
    else {
        wrongAnswer();
        alertTimer();
        nextQuestion();

    }
})

//To save score 
submitScore.addEventListener("click", function () {

    var getName = localStorage.getItem("array");

    if (score < 10 && score > 0) {
        score = "0" + score;
    }

    var userScore = [" " + score + "-" + nameInput.value + " "]
    var newArray = [];

    if (getName !== null) {
        newArray.push(getName);
    }

    newArray.push(userScore);

    localStorage.setItem("array", newArray);
    nameInput.value = " ";
})