/*
Function: getComputerSelection

Description: This function randomly selects and returns one of the choices ('Rock', 'Paper', or 'Scissors') for the computer.

Steps:
 Initialize a function named getComputerSelection.
    Initialise a variable to store the result of our mapping
    Generate a random number between 0 and 3 using the Math.random() and Math.round() methods.
    Map each possible integer value to one of the choices: 0 -> 'rock', 1 -> 'paper', 2 -> 'scissors'.
    Return the corresponding choice based on the rounded random number.
 */

function getComputerSelection() {
    let computerSelection;
    let randomisedChoice = Math.floor(Math.random() * 3);

    if (randomisedChoice === 0) {
        computerSelection = 'rock';
    } else if (randomisedChoice === 1) {
        computerSelection = 'paper';
    } else if (randomisedChoice === 2) {
        computerSelection = 'scissors';
    }

    return computerSelection;
}

/*
START playRound function
    In parentheses let the computer know to expect a playerSelection and a computerSelection 
    CONVERT playerChoice to lowercase
    IF playerChoice is not rock, paper, or scissors THEN
        RETURN "Invalid choice"
    END IF
    IF playerChoice equals computerSelection THEN
        RETURN "It's a tie!"
    ELSE IF (playerChoice is rock AND computerSelection is scissors) OR
            (playerChoice is paper AND computerSelection is rock) OR
            (playerChoice is scissors AND computerSelection is paper) THEN
        RETURN "You win! [playerChoice] beats [computerSelection]"
    ELSE
        RETURN "You lose! [computerSelection] beats [playerChoice]"
    END IF
END playRound function
*/

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase()

    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        return "Invalid choice"
    }

    if (playerSelection === computerSelection) {
        displayResult("It's a tie!"); 
    } else if (
        playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper'
    ) {
        displayResult(`You win! ${playerSelection} beats ${computerSelection}`);
    } else {
        displayResult(`You lose! ${computerSelection} beats ${playerSelection}`); 
    }
}

// playRound Test suite
// const playerSelection = 'rock'
// const computerSelection = getComputerSelection()
// console.log(playRound(playerSelection, computerSelection))


// FUNCTION handleButtonClick, accepting event as parameter
// SET button to event.target
// IF button.tagName is equal to 'BUTTON' THEN
//     SET playerSelection to button.textContent converted to lowercase
//     CALL playRound with playerSelection as argument
// END IF
// END FUNCTION

function handleButtonClick(event) {
    const btn = event.target;
    const playerSelection = btn.textContent.toLowerCase()
    if (btn.tagName === 'BUTTON') {
        playRound(playerSelection);
    }
}


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
        displayResult("You win player!");
    } else if (computerScore > playerScore) {
        displayResult("Oh no! The computer wins!");
    } else {
        displayResult("We have a tie!")
    }
}

function displayResult (result) {
    const display = document.querySelector('.results')

    const para = document.createElement("p");
    para.textContent = result;
    display.appendChild(para);

}