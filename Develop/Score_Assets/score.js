var score = localStorage.getItem("score");
var playerName = localStorage.getItem("Name");

var scoreList = document.querySelector(".scores");
var clear = document.querySelector(".submit");

var entry = document.createElement("li");
entry.setAttribute("class", "score-list");
entry.innerHTML= playerName + " - " + score;
scoreList.prepend(entry);

function newEntry () {
entry.innerHTML= playerName + "     " + score;
scoreList.prepend(entry);

clear.addEventListener("click", function (){
    scoreList.remove(entry);
})
}
newEntry();

