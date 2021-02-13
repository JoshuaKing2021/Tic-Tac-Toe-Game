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

// função para alterar o turno dos jogadores
function playerChange() {
   //currentPlayer = currentPlayer === xPlayer ? oPlayer : xPlayer;
   if (currentPlayer === xPlayer) {
    currentPlayer = oPlayer; 
    playerTurn2.textContent = `${playerTwo} é a tua vez`
    playerTurn2.style.visibility = 'visible';
    playerTurn.style.visibility = 'hidden';

   }else{
    currentPlayer = xPlayer;    
    playerTurn2.style.visibility = 'hidden';
    playerTurn.style.visibility = 'visible';
    playerTurn.textContent = `${playerOne} é a tua vez` 
   }
}

//Verificaçóes
const winningConditions = [
    // verificação na Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // verificação na Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //verificação na Diagonal
    [0, 4, 8],
    [2, 4, 6]
]

//função para certificaçãp do resultado
function resultValidation() {
    let roundWon = false;
    for(let i = 0; i < 8; i++) {
        const winConditions = winningConditions[i];
        let a = gameBoard[winConditions[0]];
        let b = gameBoard[winConditions[1]];
        let c = gameBoard[winConditions[2]];

        if(a === '' || b === '' || c === ''){
            continue;
        }
        if(a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if(roundWon){
        gameActive = false;
        return;
    }

    let roundDraw = !gameBoard.includes("");
    if(roundDraw){
        gameActive = false;
        return;
    }

    playerChange();
}