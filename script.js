// console.log("Hello World");

humanScore = 0;
computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"];
    let userChoice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
    
    // Validate the user input
    while (!choices.includes(userChoice)) {
        userChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    
    return userChoice;
}

// Test the function
console.log(getHumanChoice()); // This will prompt the user and return a valid choice

function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
               humanChoice === "scissors" && computerChoice === "paper" ||
               humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("You lose!");
        computerScore++;
    }
    
    console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}.`);
    console.log(`The score is: You: ${humanScore} Computer: ${computerScore}`);
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();