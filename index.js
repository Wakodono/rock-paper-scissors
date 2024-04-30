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
START playGame function
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
END playGame function
*/

let playerScore = 0;
let computerScore = 0;

function playGame(playerSelection, computerSelection) {
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
        playerScore++;
        displayResult(`You win! ${playerSelection} beats ${computerSelection}`)
    } else {
        computerScore++;
        displayResult(`You lose! ${computerSelection} beats ${playerSelection}`)
    }
}


// playRound Test suite
// const playerSelection = 'rock'
// const computerSelection = getComputerSelection()
// console.log(playRound(playerSelection, computerSelection))

function isGameOver() {
    if (playerScore === 5) {
        displayResult(`You win! The game is now over!`)
        return true;
    } else if (computerScore === 5) {
        displayResult(`You lose! The pesky computer got to a score of 5 first.`)
        return true;
    } else {
        return false;
    }
}


// FUNCTION handleButtonClick, accepting event as parameter
// SET button to event.target
// IF button.tagName is equal to 'BUTTON' THEN
//     SET playerSelection to button.textContent converted to lowercase
//     CALL playRound with playerSelection as argument
// END IF
// END FUNCTION

function handleButtonClick(event) {
    const button = event.target;
    const computerSelection = getComputerSelection();

    if (button.tagName === 'BUTTON') {
        const playerSelection = button.textContent.toLowerCase();

        playGame(playerSelection, computerSelection);

        if (isGameOver()) buttonList.removeEventListener('click', handleButtonClick);
    };
}

const buttonList = document.querySelector('.button-list')

buttonList.addEventListener('click', handleButtonClick)

function displayResult(result) {
    const displayContainer = document.querySelector('.results')
    const display = document.createElement('div');

    display.style.cssText = "margin-bottom: 12px; border: 1px solid black";

    const para = document.createElement("p");
    para.textContent = result;

    const playerScoreDisplay = document.createElement('span');
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    playerScoreDisplay.style.marginRight = "10px";

    const computerScoreDisplay = document.createElement('span');
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    displayContainer.appendChild(display)

    display.appendChild(para);
    display.appendChild(playerScoreDisplay);
    display.appendChild(computerScoreDisplay);
}