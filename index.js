/*
Function: getComputerChoice

Description: This function randomly selects and returns one of the choices ('Rock', 'Paper', or 'Scissors') for the computer.

Steps:
1. Initialize a function named getComputerChoice.
2. Inside the function, generate a random number between 0 and 1 using the Math.random() method.
3. Round the random number to the nearest integer using the Math.round() method to get either 0 or 1.
4. Map each possible integer value to one of the choices: 0 -> 'Rock', 1 -> 'Paper', 2 -> 'Scissors'.
5. Return the corresponding choice based on the rounded random number.

 */

function getComputerChoice() {
    let computerChoice;
    let randomisedChoice = Math.floor(Math.random() * 3);

    if (randomisedChoice === 0) {
        computerChoice = 'Rock';
    } else if (randomisedChoice === 1) {
        computerChoice = 'Paper';
    } else if (randomisedChoice === 2) {
        computerChoice = 'Scissors';
    }

    return computerChoice;
}

// console.log(getComputerChoice())

/*
START playRound function
    GET playerChoice
    GET computerChoice
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

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return "It's a tie!"
    } else if (
        playerChoice == 'rock' && computerChoice == 'scissors' || 
        playerChoice == 'paper' && computerChoice == 'rock' || 
        playerChoice == 'scissors' && computerChoice == 'paper'
    ) {
        return `You win! ${playerChoice} beats ${computerChoice}`
    } else {
        return `You lose! ${computerChoice} beats ${playerChoice}` 
    }
}

const playerChoice = "rock";
const computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));