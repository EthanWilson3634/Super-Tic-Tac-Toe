const statusDisplay = document.querySelector('.game--status');

let gameActive = true;
let currentPlayer = X;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () =>'Player ${currentPlayer} has won!';
const drawMessage = () => 'The game has ended in a draw.';
const currentPlayerTurn = () => 'Its ${currentPlayer}s turn';

statusDisplay.innerHTML = currentPlayerTurn;

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 8]
];

function cellPlayed(clickedCell, clickedCellIndex){
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function playerChange(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn;
}

function resultVaildation(){
    let roundWon = false;
    for(let i = 0; i <= 7; i++){
        const winCondition = winingConditions[i];
    }
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelector('.game--restart').addEventListener('click', restartGame);