let gridContainer = document.querySelector(".container");


let initialGrid = () => {

for(let i = 0; i < 256; i++){
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("gridboxes");
    gridContainer.appendChild(gridSquare);
}

console.log("working");
};

initialGrid();

gridContainer.addEventListener("mouseover", (evt) => {
   
    if(evt.target.className === "gridboxes"){
        evt.target.style.backgroundColor = "black"
    }
})

clearGrid = () => {
    let gridContents = gridContainer.querySelectorAll("div");
    let gridArray = Array.from(gridContents);
    console.log(gridArray);
    
    gridArray.forEach(element => {
        element.style.backgroundColor = "white"
    });
    
};

createGrid  = (x) => {
    
    gridContainer.innerHTML = "";
   
    let gridSize = x * x;

    for(let i = 0; i < gridSize; i++){
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("gridboxes");
        gridContainer.appendChild(gridSquare);

    }

    gridContainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${x}, 1fr)`;

};

