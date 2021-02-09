var fullScores = localStorage.getItem("array");
var list = fullScores.split(" ");

var scoreList = document.querySelector(".scores");
var clear = document.querySelector(".clear");


//Cleans up commas and extra spaces left by array
function arrayClean(arr) {

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === "," || arr[i] === "") {
            arr.splice(i, 1);
        }
       
    }
}

//Sorts through array and returns it in descending order
function sortArray(arr) {

    arr.sort(function (a, b) {
        if (a > b)
            return 1;
        if (a < b)
            return -1;
        return 0;
    });
    return arr;
}

//Renders scorelist to page
function newEntry(arr) {

    for (j = 0; j < arr.length; j++) {
        var content = arr[j];

        var entry = document.createElement("li");
        entry.setAttribute("class", "score-list");
        entry.setAttribute("style", "margin: 0 auto; margin-top: 5px; margin-bottom: 5px; width: 50%");
        entry.textContent = content;
        scoreList.prepend(entry);
    }

}

//Clears high scores on click
clear.addEventListener("click", function () {
    localStorage.removeItem("array");
    scoreList.innerHTML = "";

})

//Function call
arrayClean(list);
sortArray(list);
newEntry(list);