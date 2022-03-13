const cells = document.querySelectorAll(".cell");
const PLAYER_X = 'X';
const PLAYER_O = 'O';
let turn = PLAYER_X;

boardState = Array(cells.length);
boardState.fill(null);

const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("gameOverArea");
const gameOverText = document.getElementById("gameOvertext");
const restartButton = document.getElementById("button");

cells.forEach((cell) => cell.addEventListener("click", cellClick));

function setHoverText(){
    //remove all hover text
    cells.forEach((cell) => {
        cell.classList.remove("x-hover");
        cell.classList.remove("o-hover");
    });

    const hoverClass = `${turn.toLowerCase()}-hover`;

    cells.forEach(cell=>{
        if(cell.innerText == "") {
            cell.classList.add(hoverClass);
        }
    });
}

setHoverText();

function cellClick(event){
    if (gameOverArea.classList.contains('visible')){
        return;
    }

    const cell = event.target;
    const cellIndex = cell.dataset.cellIndex;
    if(cell.innerText != ""){
        return;
    }

    if(turn === PLAYER_X){
        cell.innerText = PLAYER_X;
        boardState[cellIndex - 1] = PLAYER_X;
        turn = PLAYER_O;
    }
    else{
        cell.innerText = PLAYER_O;
        boardState[cellIndex - 1] = PLAYER_O;
        turn = PLAYER_X;
    }

    setHoverText();
    checkWin();
}

const winCombinations = [
    // Rows
    { combo: [1, 2, 3], strikeClass: "strike-row-1"},
    { combo: [4, 5, 6], strikeClass: "strike-row-2"},
    { combo: [7, 8, 9], strikeClass: "strike-row-3"},
    // Columns
    { combo: [1, 4, 7], strikeClass: "strike-column-1"},
    { combo: [2, 5, 8], strikeClass: "strike-column-2"},
    { combo: [3, 6, 9], strikeClass: "strike-column-3"},
    // Diagonals
    { combo: [1, 5, 9], strikeClass: "strike-diagonal-1"},
    { combo: [3, 5, 7], strikeClass: "strike-diagonal-2"},
];

function checkWin(){
    for(const winningCombination of winCombinations){
        // Object destructuring
        const {combo, strikeClass} = winningCombination;
        const cellValue1 = boardState[combo[0] - 1];
        const cellValue2 = boardState[combo[1] - 1];
        const cellValue3 = boardState[combo[2] - 1];

        if(
        cellValue1 != null &&
        cellValue1 === cellValue2 &&
        cellValue1 === cellValue3
        ) {
            strike.classList.add(strikeClass);
            gameOver(cellValue1);
            return;
        }
        const allCellFilledIn = boardState.every((cell) => cell !== null);
        if(allCellFilledIn){
            gameOver(null);
        }
    }

    function gameOver(gameOverText){
        let text = "It's a draw!";
        if(gameOverText != null){
            text = `Winner is ${gameOverText}!`;
        }
        gameOverArea.className = "visible";
        gameOverText.innerText = text;
    }
}