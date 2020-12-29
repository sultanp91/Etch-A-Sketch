let gridContainer = document.querySelector(".grid-container");
let clearGridButton = document.querySelector("#cleargrid");
let newGridButton = document.querySelector("#newgrid");

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
    
    gridArray.forEach(element => {
        element.style.backgroundColor = "white"
    });
    
};


createGrid  = () => {

    let x = parseInt(prompt("New grid size? Value must be a positive integer between 16 and 100"));;
    
    if(x>= 16 && x <= 100){
        gridContainer.innerHTML = "";
   
    let gridSize = x * x;

    for(let i = 0; i < gridSize; i++){
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("gridboxes");
        gridContainer.appendChild(gridSquare);

    }

    gridContainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${x}, 1fr)`;

    } else{
        alert("Invalid number. Try again");
    }
    
    

};

clearGridButton.addEventListener("click", clearGrid);
newGridButton.addEventListener("click", createGrid);


