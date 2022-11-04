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


// random game functions start

const randomButton = document.getElementById('random');
const clearButton = document.getElementById('clear-score');
const finalResultDisplay = document.getElementById('final-result');
const userResultDisplay = document.getElementById('user-result');
const computerResultDisplay = document.getElementById('computer-result');
const drawResultDisplay = document.getElementById('draw-result');


function playRandom() {
    let userScore = 0;
    let computerScore = 0;
    let drawScore = 0;
    
    for (let i = 0; i < 5; i++) {
        userChoice = getRandomNumber();
        computerChoice = getRandomNumber();
        
        switch (userChoice + computerChoice) {
            case 'paperpapaer':
            case 'scissorsscissors':
            case 'rockrock':
                drawScore++;
                break;
            case 'rockscissors':
            case 'paperrock':
            case 'scissorspaper':
                userScore++;
                break;
            case 'rockpaper':
            case 'scissorsrock':
            case 'paperscissors':
                computerScore++;
                break;
        }
    }

    userResultDisplay.textContent = userScore;
    computerResultDisplay.textContent = computerScore;
    drawResultDisplay.textContent = drawScore;

    if (userScore > computerScore) {
        finalResultDisplay.textContent = 'User won!';
    } else if (userScore < computerScore) {
        finalResultDisplay.textContent = 'Computer won!';
    } else {
        finalResultDisplay.textContent = 'It is draw'
    }
}

function clearAll() {
    userResultDisplay.textContent = ''
    computerResultDisplay.textContent = ''
    drawResultDisplay.textContent = ''
    finalResultDisplay.textContent = ''
    showResult.textContent = ''
    showSelection.textContent = ''
}


clearButton.addEventListener('click', clearAll)
randomButton.addEventListener('click', playRandom)