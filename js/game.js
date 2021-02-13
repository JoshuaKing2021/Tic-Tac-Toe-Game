//variavéis para players
let playerOne;
let playerTwo;

while (!playerOne) {
    playerOne = prompt('Jogador 1 : Digite o teu nome')
}

while (!playerTwo) {
    playerTwo = prompt('Jogador 2 : Digite o teu nome')
}


//variavéis com elementos HTML 
let playerTurn = document.querySelector('.playerTurn');
let playerTurn2 = document.querySelector('.playerTurnTwo');
let imgX = document.getElementById('crossImg');
let imgO = document.getElementById('circleImg');
let gameTitle = document.getElementById('titleGame');

 playerTurn.textContent = `${playerOne} é a tua vez`    


//variáveis 
let gameActive = true;
let xPlayer = "X";
let oPlayer = "O";
let currentPlayer = xPlayer;
let gameBoard = ["","","","","","","","",""];

// função chamada quando fazemos um click na tabela
function clickBoard(clickedCell, clickedCellIndex) {
    gameBoard[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

