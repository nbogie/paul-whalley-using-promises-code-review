//A very minimal guessing game.
//(Other demos in this folder are more detailed.)

const { prompt } = require("enquirer");

async function mainLoop() {
    while (true) {
        await askOneQuestionAndProcessAnswer();
    }
}

mainLoop();

async function askOneQuestionAndProcessAnswer() {
    const numToGuess = 3; //not a fun game!

    const result = await prompt({
        type: "number",
        name: "guessedNumber",
        message: "Guess a number between 1 and 3",
    });

    const guess = parseInt(result.guessedNumber);
    const guessedCorrectly = numToGuess === guess;
    if (guessedCorrectly) {
        console.log("correct");
    } else {
        console.log("Incorrect.  I was thinking of " + numToGuess);
    }

    return guessedCorrectly;
}
