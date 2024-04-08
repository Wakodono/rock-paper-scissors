/* STEP 1 Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step! */

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
    const randomisedChoice = Math.floor(Math.random() * 3);

    if (randomisedChoice === 0) {
        computerChoice = 'Rock';
    } else if (randomisedChoice === 1) {
        computerChoice = 'Paper';
    } else if (randomisedChoice === 2) {
        computerChoice = 'Scissors';
    }

    return computerChoice;
}

console.log(getComputerChoice())