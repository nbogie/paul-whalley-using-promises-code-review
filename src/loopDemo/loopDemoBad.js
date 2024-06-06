const { prompt } = require("enquirer");

//don't do this

function badLoop() {
    while (true) {
        askOneQuestionAndProcessAnswer();
        console.log("ok done one iteration");
    }
}

badLoop();

function askOneQuestionAndProcessAnswer() {
    console.log("About to prompt user");
    promptUser().then(processEventualAnswer);
}

function processEventualAnswer(userInput) {
    // etc
}

function promptUser() {
    const promise = prompt({
        type: "numeral",
        name: "number",
        message: "guess number 1-3",
    });
    return promise;
}
