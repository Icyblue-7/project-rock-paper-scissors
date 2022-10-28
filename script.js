const showSelection = document.getElementById('selections');
const showResult = document.getElementById('result');
const possibleChoice = document.querySelectorAll('.select-button');
let userChoice;
let computerChoice;
let result; 

// initial variables 

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 3)+1;
    switch (randomNumber) {
        case 1:
            return 'rock'
        case 2: 
            return 'paper'
        case 3: 
            return 'scissors'
    }
};



// random number generator

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    computerChoice = getRandomNumber();
    showSelection.innerHTML = 'User pick: ' + userChoice +
    ', Computer pick: ' + computerChoice;
    game();
}));

// event listener for player selection
// on selection generates computer choice

function game() {
    switch (userChoice + computerChoice) {
        case 'paperpapaer':
        case 'scissorsscissors':
        case 'rockrock':
            showResult.innerHTML = 'Draw! '
            break;
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            showResult.innerHTML = 'User won this round! '
            break;
        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
            showResult.innerHTML = 'Computer won this round!'
            break;
    }   
}

// game function to compare results and declare winner