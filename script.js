<<<<<<< HEAD
=======
//Variable that initializes and declares the human score

//Variable that initializes and declares the computer score
let humanScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const display = document.querySelector("#display");
const hScrDisplay = document.querySelector("#humScore");
const cScrDisplay = document.querySelector("#compScore");
rockBtn.addEventListener("click", () => {
    playRound('rock', getComputerChoice())
});
paperBtn.addEventListener("click", () => {
    playRound('paper', getComputerChoice())
});
scissorsBtn.addEventListener("click", () => {
    playRound('scissors', getComputerChoice())
});

>>>>>>> rps-ui
function getComputerChoice() {
    //Random variable that is from 1-3
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    //Conditional that gives rock if variable is 1
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {  //Conditional that gives paper if variable is 2
        return "paper";
    } else {
        return "scissors";
    }
    //Conditional that gives scissors if variable is 3

}
function getHumanChoice() {
    //Variable that takes the users input as its value
    const humanChoice = prompt("Rock, Paper, or Scissors?");  
    return humanChoice;
}
<<<<<<< HEAD
//Variable that initializes and declares the human score

//Variable that initializes and declares the computer score
let humanScore = 0;
let computerScore = 0;


function playGame() {
    
    humanScore = 0;
    computerScore = 0;
    //Loop that plays five rounds
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You win! Congratulations!");
    } else if (humanScore < computerScore) {
        console.log("Womp womp. You lose!");
    } else {
        console.log("It's a tie!");
    }
    
    

}
=======


>>>>>>> rps-ui
function playRound(humanChoice, computerChoice) {
    //Make humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();
    //Conditional that takes the human choice of rock and compares it to the computerChoices
<<<<<<< HEAD
    if(humanChoice === 'rock') {
        switch(computerChoice) {
            case 'rock':
                console.log("Draw!");
                break;
            case 'paper':
                console.log("You lose! Paper beats Rock.");
                computerScore++;
                break;
            case 'scissors':
                console.log("You win! Rock beats Scissors.");
                humanScore++;
=======
    
    if(humanChoice === 'rock') {
        switch(computerChoice) {
            case 'rock':
                display.textContent = "Draw!";
                hScrDisplay.textContent = humanScore;
                cScrDisplay.textContent = computerScore;
                break;
            case 'paper':
                computerScore++;
                display.textContent = "You lose! Paper beats Rock.";
                hScrDisplay.textContent = humanScore;
                cScrDisplay.textContent = computerScore;
                break;
            case 'scissors':
                humanScore++;
                display.textContent = "You win! Rock beats Scissors.";
                hScrDisplay.textContent = humanScore;
                cScrDisplay.textContent = computerScore;
>>>>>>> rps-ui
                break;
        
        }
    } else if (humanChoice === 'paper') {
        switch(computerChoice) {
            case 'rock':
<<<<<<< HEAD
                console.log("You win! Paper beats Rock.");
                humanScore++;
                break;
            case 'paper':
                console.log("Draw!");
                break;
            case 'scissors':
                console.log("You lose! Scissors beats Paper.");
                computerScore++;
=======
                humanScore++;
                display.textContent = "You win! Paper beats Rock.";
                hScrDisplay.textContent = humanScore;
                cScrDisplay.textContent = computerScore;
                break;
            case 'paper':
                display.textContent = "Draw!";
                hScrDisplay.textContent = humanScore;
                cScrDisplay.textContent = computerScore;
                break;
            case 'scissors':
                computerScore++;
                display.textContent = "You lose! Scissors beats Paper.";
                hScrDisplay.textContent = humanScore;
                cScrDisplay.textContent = computerScore;
>>>>>>> rps-ui
                break;
        
        }
    } else {
        switch(computerChoice) {
            case 'rock':
<<<<<<< HEAD
                console.log("You lose! Rock beats Scissors.");
                computerScore++;
                break;
            case 'paper':
                console.log("You win! Scissors beats Paper.");
                humanScore++;
                break;
            case 'scissors':
                console.log("Draw!");
                break;
        }
    }
=======
                computerScore++;
                display.textContent = "You lose! Rock beats Scissors.";
                hScrDisplay.textContent = humanScore;
                cScrDisplay.textContent = computerScore;
                break;
            case 'paper':
                humanScore++;
                display.textContent = "You win! Scissors beats Paper.";
                hScrDisplay.textContent = humanScore;
                cScrDisplay.textContent = computerScore;
                break;
            case 'scissors':
                display.textContent = "Draw!";
                hScrDisplay.textContent = humanScore;
                cScrDisplay.textContent = computerScore;
                break;
        }
    }
    if(humanScore === 5) {
        display.textContent = "Congratulations! You win!";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        display.textContent = "Womp womp. The computer wins."
        humanScore = 0;
        computerScore = 0;
    }
>>>>>>> rps-ui
    //Conditional that takes the human choice of paper and compares it to the computerChoices
    //Conditional that takes the human choice of scissors and compares it to the computerChoices
    //Increment humanScore if human wins
    //Increment computerScore if computer wins
<<<<<<< HEAD
}
=======
}


>>>>>>> rps-ui
