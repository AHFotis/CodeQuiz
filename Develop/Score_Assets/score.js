var fullScores = localStorage.getItem("array");
var list = fullScores.split(" ");
console.log(list);

var scoreList = document.querySelector(".scores");
var clear = document.querySelector(".clear");



function arrayClean(arr) {

    for (i=0; i<arr.length; i++) {
        console.log(arr[i])
        // console.log(arr[i]);
        if (arr[i] === ",") {
            arr.splice(i, 1);
        }
        if (arr[i] === "") {
            arr.splice(i, 1);
    }
    console.log(arr);
}
}

function sortArray (arr) {
    
        
        arr.sort(function (a, b) {
            if (a > b)
              return 1;
            if (a < b)
              return -1;
            return 0;
        });
   return arr;
}

function newEntry(arr) {

    for (i = 0; i < arr.length; i++) {
        var content = arr[i];
        console.log(arr[i]);

        console.log(content)
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

arrayClean(list);
sortArray(list);
newEntry(list);