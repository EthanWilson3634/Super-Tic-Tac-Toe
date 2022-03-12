const cells = document.querySelectorAll(".cell");
const PLAYER_X = 'X';
const PLAYER_O = 'O';
let turn = PLAYER_X;

boardState = ["", "", "", "", "", "", "", "", "",];

const strike = document.getElementById("strike");
const results = document.getElementById("results");
const resultText = document.getElementById("results-text");
const restartButton = document.getElementById("button");

cells.forEach((cell) => cell.addEventListener('click', cellClick));

function cellClick(event){
    if(results.classList.contains('visible')){
        return;
    }

    const cell = event.target;
    const cellIndex = cell.dataset.cellIndex;
    if(cell.innerText != ""){
        return;
    }

    if(turn === PLAYER_X){
        cell.innerText = PLAYER_X;
        boardState[cellIndex] = PLAYER_X;
        turn = PLAYER_O;
    }
}