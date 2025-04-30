let outputWindow = document.getElementById("eas-window");
let windowWidth = 900; //px

outputWindow.style.width = `${windowWidth}px`;

function setupGrid(size = 16) {
    for (let i = 0; i < size*size; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${windowWidth / size}px`;
        square.style.height = `${windowWidth / size}px`;
        square.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";
            // console.log(e);
        });
        outputWindow.appendChild(square);
    }
}

setupGrid();