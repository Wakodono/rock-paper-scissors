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
        return "It's a tie!"
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

// playRound Test suite
// const playerSelection = 'rock'
// const computerSelection = getComputerChoice()
// console.log(playRound(playerSelection, computerSelection))

/* START playGame function
    Initialise variables playerScore and computerScore to keep track of each player's score
    FOR each round from 1 to 5 DO
        Prompt the player to enter their choice (rock, paper, or scissors) and store it in playerSelection
        Generate a random choice for the computer using the getComputerChoice function and store it in computerSelection
        Determine the result of the round by calling the playRound function with playerSelection and computerSelection
        IF the result is "You win!" THEN
            Increment the player's score by 1
        ELSE IF the result is "You lose!" THEN
            Increment the computer's score by 1
        END IF
        Display the result of the round in the console
    END FOR
    Determine the winner of the game based on the scores:
        IF playerScore is greater than computerScore THEN
            Display "Player wins the game!" in the console
        ELSE IF computerScore is greater than playerScore THEN
            Display "Computer wins the game!" in the console
        ELSE
            Display "We have a tie!" in the console
        END IF
END playGame function
*/

function playGame() {
    let playerScore = 0
    let computerScore = 0

    for (round = 0; round <= 5; round++) {
        const playerSelection = prompt("Choose your weapon! Rock, paper or scissors?:")
        const computerSelection = getComputerChoice()

        result = playRound(playerSelection, computerSelection)

        if (result.includes('You win')) {
            playerScore++
        } else if (result.includes('You lose')) {
            computerScore++
        }

        console.log(result)
    }

    if (playerScore > computerScore) {
        console.log("You win player!")
    } else if (computerScore > playerScore) {
        console.log("Oh no! The computer wins!")
    } else {
        console.log("We have a tie!")
    }
}

playGame()