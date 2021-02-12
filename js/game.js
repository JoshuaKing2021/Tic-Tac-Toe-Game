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


//variáveis 
let x = '../img/cross.png';
let o = '../img/circle.png';
let tableData = document.getElementsByTagName('tr');
let tableRow = document.getElementsByTagName('td');
let spaces = document.getElementsByClassName('space')
let currentPlayer = 1;

Array.prototype.forEach.call(tableData, (cell) => {
    cell.addEventListener('click', gameEngine);
    // Defina todos os espaços como brancos para um novo jogo.
    cell.style.backgroundColor = 'white';
});

function gameEngine() {
    for(let i = 0; i < tableData.length; i++){

        if (currentPlayer = 1) {
            
        }
    }
}


