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

playerTurn.textContent = `${playerOne} é a tua Vez`;
playerTurn2.textContent = `${playerTwo} é a tua Vez`