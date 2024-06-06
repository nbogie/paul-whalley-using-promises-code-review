const { prompt } = require("enquirer");

async function mainLoop() {
    while (true) {
        const guessedCorrectly = await askOneQuestion();
        console.log("guess: ", guessedCorrectly);
    }
}

mainLoop();

async function askOneQuestion() {
    const numToGuess = randomInt();

    const result = await prompt({
        name: "guess",
        type: "numeral",
        message: "Guess a number between 1 and 3",
    });

    return result.guess === numToGuess;
}

function randomInt() {
    return Math.floor(1 + Math.random() * 3);
}
