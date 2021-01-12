var fullScores = localStorage.getItem("array");
var list = fullScores.split(" ");
console.log(list);

var scoreList = document.querySelector(".scores");
var clear = document.querySelector(".clear");


function arrayClean() {

    for (i = 0; i < list.length; i++) {

        if (list[i] === "," || list[i] === "") {
            list.splice(i, 1);
        }

    }

}

function newEntry(arr) {

    for (i = 0; i < arr.length; i++) {
        var content = arr[i];
        console.log(arr[i]);
        var entry = document.createElement("li");
        entry.setAttribute("class", "score-list");
        entry.setAttribute("style", "margin: 5px");
        entry.textContent = content;
        scoreList.prepend(entry);
    }

}


clear.addEventListener("click", function () {
    localStorage.removeItem("array");
    console.log(fullScores);
    scoreList.innerHTML = "";

})

arrayClean();
newEntry(list);

