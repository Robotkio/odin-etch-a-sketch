let outputWindow = document.getElementById("eas-window");
let setGridBtn = document.getElementById("set-grid-btn");

let windowWidth = 900; //px
const maxResolution = 100;
const defaultGridSize = 16;

outputWindow.style.width = `${windowWidth}px`;
outputWindow.style.height = `${windowWidth}px`;

setGridBtn.addEventListener("click", () => {
    let input = prompt("Input number of pixels for the grid:", defaultGridSize);
    if (!isNaN(input) && input < maxResolution && input > 0) {
        clearGrid();
        setupGrid(input);
    }
})

function setupGrid(size = defaultGridSize) {
    for (let i = 0; i < size*size; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${windowWidth / size}px`;
        square.style.height = `${windowWidth / size}px`;
        square.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";
        });
        outputWindow.appendChild(square);
    }
}

function clearGrid() {
    outputWindow.innerHTML = "";
}



setupGrid();