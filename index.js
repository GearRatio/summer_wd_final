//Array for random simon selection
//const sequence = ["blue", "blue", "green", "yellow"];
let sequence = [];
let userSelect = [];
let noise = true;

const buttonColors = ["red", "blue", "green", "yellow"];

let sequenceCount = 0;
let showCount = document.querySelector("#turn");

// let sound = true;

// new code
function startGame() {
    sequenceCount = 0;
    sequence = [];
    newColorToSequence();
    addAllEventListeners();
}

function updateCount() {
    showCount.innerText++;
}

function addAllEventListeners() {
    var colorButtons = document.querySelectorAll(".color-button");

    for (let i = 0; i < colorButtons.length; i++) {
        colorButtons[i].addEventListener("click", compareSelection);
    }
}

function removeAllEventListeners() {
    var colorButtons = document.querySelectorAll(".color-button");

    for (let i = 0; i < colorButtons.length; i++) {
        colorButtons[i].removeEventListener("click", compareSelection);
    }
}

function compareSelection() {
    // push the color clicked into the userSelect array
    userSelect.push(this.id);
    illuminate(this.id);
    // as each color is clicked check if its correct
    if (userSelect[sequenceCount] === sequence[sequenceCount]) {
        // if its the end of the sequence for the level
        if (sequenceCount === sequence.length - 1) {
            // push new color and reset sequenceCount & userSelect array for next level
            newColorToSequence();
            sequenceCount = 0;
            userSelect = [];
            updateCount();
        } else {
            // waits for next color to be clicked in current sequence
            nextSequence();
        }
    } else {
        // losing condition
        console.log("lose");
        removeAllEventListeners();
    }
}

function nextSequence() {
    sequenceCount++;
}

function newColorToSequence() {
    let random = Math.floor(Math.random() * buttonColors.length);
    let randomColor = buttonColors[random];
    sequence.push(randomColor);
    console.log(sequence);
    highlightSequence();
    // updateSequenceText();
}

function updateSequenceText() {
    // do you work here

    let seqHeader = document.querySelector("#sequence");
    var seqText = "";
    sequence.forEach((color) => {
        seqText += `${color} `;
    });
    seqHeader.innerText = seqText;

    // once complete, uncomment the function in newColorToSequence();
}

function highlightSequence() {
    const red = document.querySelector("#red");
    const blue = document.querySelector("#blue");
    const yellow = document.querySelector("#yellow");
    const green = document.querySelector("#green");

    for (let i = 0; i <= sequence.length; i++) {
        const currentColor = sequence[i];
        setTimeout(() => {
            illuminate(currentColor);
        }, (i + 1) * 500 + 300);
    }
}

function illuminate(currentColor) {
    if (currentColor == "red") {
        red.style.background = "#ffbbbb";
        // one();
        setTimeout(function() {
            red.style.background = "red";
            one();
        }, 300);
    } else if (currentColor == "blue") {
        blue.style.background = "#c8c8ff";
        // two();
        setTimeout(function() {
            blue.style.background = "blue";
            two();
        }, 300);
    } else if (currentColor == "green") {
        green.style.background = "#dcffdc";
        // three();
        setTimeout(function() {
            green.style.background = "green";
            three();
        }, 300);
    } else if (currentColor == "yellow") {
        yellow.style.background = "#ffffca";
        // four();
        setTimeout(function() {
            yellow.style.background = "yellow";
            four();
        }, 300);
    }
}
//audio for buttons
function one() {
    if (noise) {
        let audio = document.getElementById("audio1");
        audio.play();
    }
    noise = true;
    // red.style.backgroundColor = "#ffbbbb";
}

function two() {
    if (noise) {
        let audio = document.getElementById("audio2");
        audio.play();
    }
    noise = true;
    // red.style.backgroundColor = "#c8c8ff";
}

function three() {
    if (noise) {
        let audio = document.getElementById("audio3");
        audio.play();
    }
    noise = true;
    // red.style.backgroundColor = "#dcffdc";
}

function four() {
    if (noise) {
        let audio = document.getElementById("audio4");
        audio.play();
    }
    noise = true;
    // red.style.backgroundColor = "#ffffca";
}

// function openModal() {
//   let modal = document.getElementById("modal");
//   // console.log("Kind of working")
//   modal.style = "visibility:visible";
// }

// //function to close modal using the "X" in upper left corner of modal
// function closeModal() {
//   let modal = document.getElementById("modal");
//   // console.log("Kind of working")
//   modal.style = "visibility:hidden";
// }