// console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// function getHumanChoice() {
//     const choices = ["rock", "paper", "scissors"];
//     let userChoice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
    
//     // Validate the user input
//     while (!choices.includes(userChoice)) {
//         userChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
//     }
    
//     return userChoice;
// }


function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const resultsDiv = document.getElementById('result');
    resultsDiv.innerHTML = ''; // Clear previous results

    
    if (humanChoice === computerChoice) {
        resultMessage = `It's a tie! You both chose ${humanChoice}.`;
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
               humanChoice === "scissors" && computerChoice === "paper" ||
               humanChoice === "paper" && computerChoice === "rock") 
               {
                resultMessage = `You win this round! ${humanChoice} beats ${computerChoice}.`;
                humanScore++;
    } else {
        resultMessage = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }
    
    resultsDiv.innerHTML += `<p>${resultMessage}</p>`;
    resultsDiv.innerHTML += `<p>Score: You: ${humanScore} Computer: ${computerScore}</p>`;

    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "Congratulations! You win the game!" : "Game over! The computer wins!";
        resultsDiv.innerHTML += `<h2>${winner}</h2>`;

        // Disable buttons after the game ends
        document.querySelectorAll('button').forEach(button => button.disabled = true);
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});


// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         playRound();
//     }
    
//     if (humanScore > computerScore) {
//         console.log("You win the game!");
//     } else if (humanScore < computerScore) {
//         console.log("You lose the game!");
//     } else {
//         console.log("It's a tie game!");
//     }
// }

// playGame();