let outputWindow = document.getElementById("eas-window");
let setGridBtn = document.getElementById("set-grid-btn");
let clearGridBtn = document.getElementById("clear-grid-btn");

let windowWidth = 500; //px
const maxResolution = 100;
const defaultGridSize = 16;
const opacityStart = 0.5;
const opacityIncrease = 0.1;

outputWindow.style.width = `${windowWidth}px`;
outputWindow.style.height = `${windowWidth}px`;

setGridBtn.addEventListener("click", () => {
    let input = prompt(`Input number of pixels for the grid side (max ${maxResolution}):`, defaultGridSize);
    let error;

    if (isNaN(input)) {
        error = `"${input}" is not a number!`;
    } else if (input > maxResolution) {
        error = `${input} is greater than the maximum resolution of ${maxResolution}!`;
    } else if (input < 1) {
        error = `${input} is negative! It must be 1 or higher.`;
    }

    if (!error) {
        emptyGrid();
        setupGrid(input);
    } else {
        alert(error);
    }
});

clearGridBtn.addEventListener("click", () => {
    clearGrid();
});

function setupGrid(size = defaultGridSize) {
    for (let i = 0; i < size*size; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.flex = `1 0 ${100/size}%`;
        square.addEventListener("mouseover", (e) => {
            if (e.target.classList.contains("fill")) {
                let opacity = Number(window.getComputedStyle(e.target).getPropertyValue("opacity"));
                e.target.style.opacity = opacity + opacityIncrease;
            } else {
                e.target.classList.add("fill");
                e.target.style.opacity = opacityStart;
            }
        });
        outputWindow.appendChild(square);
    }
}

function emptyGrid() {
    outputWindow.innerHTML = "";
}

function clearGrid() {
    let squares = document.querySelectorAll(".square");
    for (let square of squares) {
        let opacity = Number(window.getComputedStyle(square).getPropertyValue("opacity"));
        if (opacity > 0.2) {
            square.style.opacity = opacity / 2;
        } else {
            square.classList.remove("fill");
        }
    }
}

setupGrid();