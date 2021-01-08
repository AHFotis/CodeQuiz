var counter = document.querySelector(".countdown");
var title = document.querySelector(".quiz-header")
var go = document.querySelector(".go");

var time = 60;

counter.textContent = time;

//Function to start timer
function beginTimer() {
var timerGo = setInterval(function() {
    time--;
    counter.textContent = time;

if (time === 0) {
    clearInterval(timerGo);
}    

}, 1000)    
}

//Function to go to quiz
go.addEventListener("click", function(event) {
    
    var element = event.target;
    var display = element.getAttribute("data-display");

    if (display === "visible"){
        element.style.display = "none";
        element.setAttribute("data-display", "hidden");
    }
    beginTimer();
})