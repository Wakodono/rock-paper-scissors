/*
Function: getComputerChoice

Description: This function randomly selects and returns one of the choices ('Rock', 'Paper', or 'Scissors') for the computer.

Steps:
 Initialize a function named getComputerChoice.
    Initialise a variable to store the result of our mapping
    Generate a random number between 0 and 3 using the Math.random() and Math.round() methods.
    Map each possible integer value to one of the choices: 0 -> 'rock', 1 -> 'paper', 2 -> 'scissors'.
    Return the corresponding choice based on the rounded random number.
 */

function getComputerChoice() {
    let computerChoice;
    let randomisedChoice = Math.floor(Math.random() * 3);

    if (randomisedChoice === 0) {
        computerChoice = 'rock';
    } else if (randomisedChoice === 1) {
        computerChoice = 'paper';
    } else if (randomisedChoice === 2) {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

/*
START playRound function
    In parentheses let the computer know to expect a playerSelection and a computerSelection 
    CONVERT playerChoice to lowercase
    IF playerChoice is not rock, paper, or scissors THEN
        RETURN "Invalid choice"
    END IF
    IF playerChoice equals computerChoice THEN
        RETURN "It's a tie!"
    ELSE IF (playerChoice is rock AND computerChoice is scissors) OR
            (playerChoice is paper AND computerChoice is rock) OR
            (playerChoice is scissors AND computerChoice is paper) THEN
        RETURN "You win! [playerChoice] beats [computerChoice]"
    ELSE
        RETURN "You lose! [computerChoice] beats [playerChoice]"
    END IF
END playRound function
*/

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase()
    
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        return "Invalid choice"
    }

    if (playerSelection === computerSelection) {
        "It's a tie!"
    } else if (
        playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper'
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

const playerSelection = 'rock'
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))

// 1. Define a function called playGame().
// 2. Initialize variables to keep track of player and computer scores.
// 3. Use a loop to play 5 rounds of the game:
//     for (round = 1; round <= 5; round++) {

//         3.1. Prompt the user to input their choice for this round using prompt().
//             playerChoice = prompt("Enter your choice (rock, paper, or scissors):");

//         3.2. Generate the computer's choice for this round using getComputerChoice().
//             computerChoice = getComputerChoice();

//         3.3. Call the playRound() function with playerChoice and computerChoice as arguments to determine the winner of this round.
//             roundResult = playRound(playerChoice, computerChoice);

//         3.4. If the roundResult is "You win!", increment playerScore by 1.
//             If roundResult equals "You win!":
//                 playerScore += 1

//         3.5. If the roundResult is "You lose!", increment computerScore by 1.
//             If roundResult equals "You lose!":
//                 computerScore += 1

//         3.6. Log the result of this round to the console using console.log().
//             Log roundResult to the console.
//     }


// 4. Determine the winner of the game based on the scores.
//     START IF
//     If playerScore is greater than computerScore, declare the player as the winner.
//     Else if computerScore is greater than playerScore, declare the computer as the winner.
//     Else, declare it as a tie.
//     END IF

