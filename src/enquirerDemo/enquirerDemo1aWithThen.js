const { prompt } = require("enquirer");

const promise = prompt({
    type: "input",
    message: "What is your favourite colour?",
    name: "faveColour",
});

promise.then(handleCompletedPromise);
console.log("registered eventual handling of results");

function handleCompletedPromise(response) {
    console.log("promise has completed!");
    console.log("response: ", response);
}
