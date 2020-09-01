const container = document.querySelector("#main-container");
const newBoard = document.querySelector('#new-size');
const resetButton = document.querySelector('#reset');
const turnBlack = document.querySelector('#black');
const turnRainbow = document.querySelector('#rainbow');
let grid = 16;
let gridBoxes;
let isBlack = true;
let color;
createGrid();


function createGrid(){
    for(let i = 0; i < grid; ++i){
        const row = document.createElement('div');
        row.classList.add('inner-row');
        for(let j = 0; j < grid; ++j){
            const gridBox = document.createElement('div');
            gridBox.classList.add('inner');
            row.appendChild(gridBox);
        }
        container.appendChild(row);
    }
    gridBoxes = document.querySelectorAll('.inner');
    addColor();
}

function deleteGrid(){
    while(container.hasChildNodes()){
        container.removeChild(container.lastChild);
    }
}

function newBoardSize(){
    grid = prompt("Enter a new board size, x. The board will be 'x by x'.");
    deleteGrid();
    createGrid();
}

function reset(){
    gridBoxes.forEach((gridBox) => {
        gridBox.style.backgroundColor = 'white';
    })
}

function addColor(){
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener('mouseover', () => {
            if(isBlack){
                gridBox.style.backgroundColor = 'black';
            }
            else{
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                color = `rgb(${r}, ${g}, ${b})`;
                gridBox.style.backgroundColor = color;
            }
        });
    });
}

resetButton.addEventListener('click', () => {
    reset();
});

newBoard.addEventListener('click', () => {
    newBoardSize();
})

turnBlack.addEventListener('click', () => {
    isBlack = true;
})

turnRainbow.addEventListener('click', () => {
    isBlack = false;
})


