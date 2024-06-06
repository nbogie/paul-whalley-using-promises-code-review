const { prompt } = require("enquirer");

const promise = prompt({
    type: "input",
    message: "What is your favourite colour?",
    name: "faveColour",
});

promise.then((response) => {
    console.log("promise has completed!");
    console.log("response: ", response);
});
