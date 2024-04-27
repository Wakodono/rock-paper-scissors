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


// START handleButtonClick function
//     In parentheses, accept an event parameter
//     Determine which button was clicked
//     Call the playRound function with the corresponding playerSelection ("rock", "paper", or "scissors")
// END handleButtonClick function

// START playRound function
//     In parentheses, expect parameters for playerSelection and computerSelection
//     Convert playerSelection to lowercase
//     If playerSelection is not "rock", "paper", or "scissors", then
//         Return "Invalid choice"
//     End if
//     If playerSelection equals computerSelection, then
//         Return "It's a tie!"
//     Else if (playerSelection is "rock" and computerSelection is "scissors") or
//             (playerSelection is "paper" and computerSelection is "rock") or
//             (playerSelection is "scissors" and computerSelection is "paper"), then
//         Return "You win! [playerSelection] beats [computerSelection]"
//     Else
//         Return "You lose! [computerSelection] beats [playerSelection]"
//     End if
// END playRound function

function handleButtonClick(event) {
    playRound(playerSelection);
}

// ADD an event listener to rockButton for the "click" event, with a callback function that takes an event as its parameter
//     SET button to the target element of the event
//     IF the tag name of button is equal to 'BUTTON' THEN
//         SET playerSelection to the text content of button, converted to lowercase
//         CALL playRound function with playerSelection as argument
//     END IF

const rockButton = document.querySelector(".button-list");

rockButton.addEventListener("click", event => {
    const button = event.target;
    if (button.tagName === 'BUTTON') {
        const playerSelection = button.textContent.toLowerCase();

        playRound(playerSelection);
    };
})


/* START playGame function
    Initialise variables playerScore and computerScore to keep track of each player's score
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

    if (playerScore > computerScore) {
        console.log("You win player!")
    } else if (computerScore > playerScore) {
        console.log("Oh no! The computer wins!")
    } else {
        console.log("We have a tie!")
    }
}

// playGame()