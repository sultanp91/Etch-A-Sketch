let gridContainer = document.querySelector(".container");


let createGrid = () => {

for(let i = 0; i < 256; i++){
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("gridboxes");
    gridContainer.appendChild(gridSquare);
}

console.log("working");
};

createGrid();